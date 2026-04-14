from typing import List

from fastapi import FastAPI, Depends
from sqlmodel import Session, select

from app.core.database import get_session
from app.models import *  # noqa

app = FastAPI(
    title="API Gestão AC",
    description="Backend para o Sistema de Gestão de Atividades Complementares",
    version="1.0.0"
)

SQLModel = get_session()


@app.get("/")
def read_root():
    return {"status": "Sistema de Gestão AC Fatesg Online"}

#rota de teste
@app.get("/cursos/", response_model=List[Curso])
def listar_cursos(session: Session = Depends(get_session)):
    cursos = session.exec(select(Curso)).all()
    return cursos