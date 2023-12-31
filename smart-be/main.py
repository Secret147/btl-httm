from fastapi import FastAPI, WebSocket
import base64
from detect import run
import os

app = FastAPI()


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


@app.websocket("/ws/detect")
async def ws_detect(websocket: WebSocket):
    await websocket.accept()
    while True:
        # save file
        data_uri = await websocket.receive_text()
        input_file_path = save_base64_as_file(data_uri, "file")

        await run(weights="yolov5s.pt", source=input_file_path, nosave=True, name="", websocket=websocket)

        os.remove(input_file_path)