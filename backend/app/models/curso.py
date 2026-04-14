import uuid
from datetime import datetime, timezone
from typing import Optional
from sqlmodel import Field, SQLModel


class Curso(SQLModel, table=True):
    __tablename__ = "cursos"

    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    nome: str = Field(unique=True, index=True)
    codigo_mec: str
    carga_horaria_ac_obrigatoria: int
    descricao: Optional[str] = None
    data_criacao: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
