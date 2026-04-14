import uuid
from datetime import datetime, timezone
from typing import Optional

from sqlalchemy import func
from sqlmodel import SQLModel, Field, Relationship

from app.models.enums.status_processo import StatusProcessoEnum


class Processo(SQLModel, table=True):
    __tablename__ = "processos"

    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)

    aluno_id: uuid.UUID = Field(foreign_key="alunos.id", index=True)
    coordenador_id_validador: Optional[uuid.UUID] = Field(default=None, foreign_key="coordenadores.id")

    status: StatusProcessoEnum = Field(default=StatusProcessoEnum.AGUARDANDO_VALIDACAO)
    horas_cumpridas: int = Field(default=0)
    modalidades_atendidas: int = Field(default=0)
    parecer_coordenador: Optional[str] = None
    data_validacao: Optional[datetime] = None
    data_integralizacao: Optional[datetime] = None

    data_criacao: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    data_atualizacao: Optional[datetime] = Field(
        default_factory=lambda: datetime.now(timezone.utc),
        sa_column_kwargs={"onupdate": func.now()}
    )

    aluno: "Aluno" = Relationship(back_populates="processos")
