from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from websockets.exceptions import ConnectionClosedError
import base64
from detect import run
import os
import cv2
import numpy as np
import torch
from fastapi.middleware.cors import CORSMiddleware
from gtts import gTTS
import os
from playsound import playsound
import mysql.connector
from train import run as train

app = FastAPI()

origins = [
    "http://localhost",  # Thay đổi thành nguồn của ứng dụng React của bạn
    "http://localhost:3000",
    "http://localhost:5174",
    "http://localhost:5173"
        # Đây là ví dụ URL của ứng dụng React
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = torch.hub.load("ultralytics/yolov5", "custom", path="face_detection.pt")
eyes_state_model = torch.hub.load("ultralytics/yolov5", "custom", path="eyes_state.pt")
eyes_state_model.conf = 0.1
names = (
    eyes_state_model.module.names
    if hasattr(eyes_state_model, "module")
    else eyes_state_model.names
)


# def speak(mess):
#     say = gTTS(text=mess, lang="vi")
#     say.save("voice1.mp3")
#     playsound("voice1.mp3")
#     os.remove("voice1.mp3")


def save_base64_as_file(data_uri, file_path):
    try:
        data_parts = data_uri.split(",")
        if len(data_parts) != 2:
            raise ValueError("Invalid data URI format")

        base64_data = data_parts[1]
        binary_data = base64.b64decode(base64_data)

        file_type = data_parts[0].split("/")[1].split(";")[0]

        file_path = f"{file_path}.{file_type}"

        with open(file_path, "wb") as file:
            file.write(binary_data)

        print(f"File saved as {file_path}")
        return file_path
    except Exception as e:
        print(f"An error occurred: {e}")


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.websocket("/video")
async def video_websocket(websocket: WebSocket):
    await websocket.accept()
    cap = cv2.VideoCapture(
        1
    )  # 0 represents the default webcam, you can change it to another camera index if you have multiple cameras

    i = 0
    drowsiness = 0
    alarm_max_frame = 5
    try:
        while True:
            # Read a frame from the webcam
            ret, frame = cap.read()

            # Perform inference on the frameq
            results = model(frame)

            # Get the detected objects
            objects = results.pred[0]

            # Draw bounding boxes on the frame
            isOK = False
            for obj in objects:
                x1, y1, x2, y2, conf, label = obj.tolist()
                x1, y1, x2, y2 = map(int, [x1, y1, x2, y2])
                cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
                # cv2.putText(frame, f'Label: {names[int(label)]}', (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
                # Crop the face from the frame
                face = frame[y1:y2, x1:x2]

                # save_face(face,i)
                i += 1
                ##=======================eyes state========================
                eyes = eyes_state_model(face)
                state = eyes.pred[0]
                for st in state:
                    x1e, y1e, x2e, y2e, confe, labele = st.tolist()
                    x1e, y1e, x2e, y2e = map(int, [x1e, y1e, x2e, y2e])
                    cv2.rectangle(face, (x1e, y1e), (x2e, y2e), (0, 255, 0), 2)
                    cv2.putText(
                        face,
                        f"state: {names[int(labele)]}",
                        (x1e, y1e - 10),
                        cv2.FONT_HERSHEY_SIMPLEX,
                        0.5,
                        (0, 255, 0),
                        2,
                    )
                    # save_face(face, i)
                    print(f"state: {names[int(labele)]}")
                    if labele == 1:
                        drowsiness += 1
                    else:
                        drowsiness = 0
                    i += 1
                    isOK = True
            # Display the frame
            # if isOK == False:
                # speak("Vui lòng điều chỉnh camera để tôi có thể thấy rõ bạn")
            # if drowsiness > alarm_max_frame:
                # speak("Bạn đang có dấu hiệu buồn ngủ vui lòng dừng xe lại nghỉ ngơi")
            _, img_encoded = cv2.imencode(".jpg", frame)
            img_bytes = img_encoded.tobytes()
            img_base64 = base64.b64encode(img_encoded.tobytes()).decode("utf-8")
            await websocket.send_text(img_base64)
    except (ConnectionClosedError, WebSocketDisconnect) as e:
        cap.release()
        cv2.destroyAllWindows()
        # Mở camera và gửi video qua WebSocket

@app.websocket("/ws/detect")
async def ws_detect(websocket: WebSocket):
    await websocket.accept()
    while True:
        # save file
        data_uri = await websocket.receive_text()
        input_file_path = save_base64_as_file(data_uri, "file")

        await run(
            weights="yolov5s.pt",
            source=input_file_path,
            nosave=True,
            name="",
            websocket=websocket,
        )

        os.remove(input_file_path)
        await websocket.close()

@app.get("/all-model")
def get_all_models():
    results = []

    db = mysql.connector.connect(
            host="103.200.23.179",
            username="nroshin1_admin",
            password="E%K[INB=@-q=",
	    database="nroshin1_drowseness_alarm"
        )
    cursor = db.cursor()
    query = "SELECT * FROM model_face"
    cursor.execute(query)
    results.append(cursor.fetchall())
    query = "SELECT * FROM model_eye"
    cursor.execute(query)
    results.append(cursor.fetchall())
    query = "SELECT * FROM model_test"
    cursor.execute(query)
    results.append(cursor.fetchall())

    cursor.close()
    db.close()

    return results

@app.websocket("/ws/train-test")
async def ws_train_face(websocket: WebSocket):
    await websocket.accept()
    while True:
        model_name = await websocket.receive_text()

        train(data="coco128.yaml", weights="yolov5s.pt", batch_size=16, epochs=1, model_name=model_name)
        break
    await websocket.send_text("done")
    await websocket.close()
