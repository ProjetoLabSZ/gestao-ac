import uuid
from typing import Optional

from sqlmodel import SQLModel, Field
from datetime import datetime, timezone
from sqlalchemy import func
from app.models.enums.funcao import FuncaoEnum


class Usuario(SQLModel, table=True):
    __tablename__ = "usuarios"

    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    email: str = Field(unique=True, index=True)
    nome: str
    senha_hash: str
    funcao: FuncaoEnum
    ativo: bool = Field(default=True)
    data_criacao: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    data_atualizacao: Optional[datetime] = Field(
        default_factory=lambda: datetime.now(timezone.utc),
        sa_column_kwargs={"onupdate": func.now()}
    )
