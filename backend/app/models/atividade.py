import uuid
from typing import Optional

from sqlmodel import SQLModel, Field

from app.models.enums.modalidade import ModalidadeEnum
from app.models.enums.tipo_documento import TipoDocumentoEnum


class Atividade(SQLModel, table=True):
    __tablename__ = "atividades"

    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    modalidade: ModalidadeEnum
    tipo: str
    nome: str
    carga_horaria_equivalente: int
    limite_anual: Optional[int] = Field(default=None)
    limite_total: Optional[int] = Field(default=None)
    limite_por_semestre: Optional[int] = Field(default=None)
    tipo_documentacao: TipoDocumentoEnum
    obs: Optional[str] = None
    ativo: bool = Field(default=True)
