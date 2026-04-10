# Validação de Atividades e Processos

---

## `PUT /processos/{processo_id}/atividades/{atividade_aluno_id}/validar`

Coordenador valida ou rejeita atividade individual.

**Requer:** `coordenador`, `admin`

**Request (Aprovação):**
```json
{
  "status": "Validada"
}
```

**Request (Rejeição):**
```json
{
  "status": "Rejeitada",
  "motivo_rejeicao": "Documentação ilegível"
}
```

**Response (200):**
```json
{
  "data": {
    "id": "uuid-atividade-aluno-1",
    "status_validacao": "Validada",
    "data_validacao": "2026-04-10T16:00:00Z"
  }
}
```

**Status possíveis:**
- `Validada`: Documentação aceita, horas contabilizadas
- `Rejeitada`: Documentação inadequada, aluno deve reenviar

---

## `PUT /processos/{processo_id}/validacao-completa`

Coordenador finaliza validação de todas atividades e emite parecer.

**Requer:** `coordenador`, `admin`

**Request:**
```json
{
  "parecer": "Todas atividades validadas. Processo conforme ANEXO A."
}
```

**Response (200):**
```json
{
  "data": {
    "id": "uuid-processo-1",
    "status": "ValidacaoConcluida",
    "coordenador_id_validador": "uuid-coord-1",
    "parecer_coordenador": "Todas atividades validadas. Processo conforme ANEXO A.",
    "data_validacao": "2026-04-10T17:45:00Z"
  }
}
```

**Backend Logic:**
1. Validar que todas atividades têm status (Validada ou Rejeitada)
2. Contar modalidades únicas atendidas
3. Validar horas >= carga obrigatória do curso
4. Se OK: status automaticamente para Integralizado
5. Se ERRO: notificar Secretaria + email ao aluno
6. Registra em auditoria

**Errors:**
- `400 ATIVIDADES_PENDENTES`: Ainda há atividades com status Pendente
- `400 REGRAS_NAO_ATENDIDAS`: Falha em validação (2 modalidades, limites, horas)
