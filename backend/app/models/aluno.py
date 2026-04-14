import uuid
from datetime import datetime, timezone

from sqlmodel import Field, SQLModel, Relationship


# noinspection PyTypeHints
class Aluno(SQLModel, table=True):
    __tablename__ = "alunos"

    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    matricula: str = Field(unique=True, index=True)
    turma: str
    curso_id: uuid.UUID = Field(foreign_key="cursos.id", index=True)
    data_ingresso: datetime
    data_conclusao_prevista: datetime
    data_criacao: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    processos: list["Processo"] = Relationship(back_populates="aluno")
