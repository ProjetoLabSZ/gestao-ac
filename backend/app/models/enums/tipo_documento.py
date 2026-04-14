from enum import Enum


class TipoDocumentoEnum(str, Enum):
    Certificado = "certificado"
    Declaracao = "declaracao"
    Historico = "historico"
    Lista = "lista"
    Comprovante = "comprovante"
