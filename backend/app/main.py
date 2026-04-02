from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"status": "Sistema de Gestão AC Fatesg Online"}