import uuid
from datetime import datetime, timezone
from typing import Optional
from sqlmodel import Field, SQLModel


class Coordenador(SQLModel, table=True):
    __tablename__ = "coordenadores"

    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    user_id: uuid.UUID = Field(foreign_key="usuario.id", index=True)
    curso_id: uuid.UUID = Field(foreign_key="curso.id", index=True)
    data_criacao: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    data_inativacao: Optional[datetime] = None
    ativo: bool = Field(default=True)
