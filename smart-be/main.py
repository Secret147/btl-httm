from fastapi import FastAPI, UploadFile
from detect import run
import aiofiles
import os
import base64

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/api/detect")
async def detect_awareness(file: UploadFile):
    async with aiofiles.open(file.filename, 'wb') as out_file:
        content = await file.read()  # async read
        await out_file.write(content)  # async write

    run(weights="yolov5s.pt", source=file.filename, project="runs", name="", exist_ok=True)

    with open("runs/" + file.filename, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())

    os.remove(file.filename)
    os.remove("runs/" + file.filename)

    return {"result": encoded_string}