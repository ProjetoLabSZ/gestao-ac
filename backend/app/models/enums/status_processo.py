from enum import StrEnum


class StatusProcessoEnum(StrEnum):
    AGUARDANDO_VALIDACAO = "aguardando_validacao"
    VALIDACAO_CONCLUIDA = "validacao_concluida"
    INTEGRALIZADO = "integralizado"
    REJEITADO = "rejeitado"
