# Registro no Histórico Escolar

---

## `PUT /processos/{processo_id}/registrar-historico`

Secretaria registra AC integralizada no Histórico Escolar do aluno.

**Requer:** `secretaria`, `admin`

**Request:**
```json
{}
```

**Response (200):**
```json
{
  "data": {
    "id": "uuid-processo-1",
    "aluno_id": "uuid-aluno-1",
    "status": "Integralizado",
    "horas_cumpridas": 240,
    "modalidades_atendidas": 2,
    "data_integralizacao": "2026-04-10T18:00:00Z"
  }
}
```

**Pré-requisitos:**
- Status deve ser `ValidacaoConcluida`
- Todas atividades devem estar validadas
- Regras (2 modalidades, limites, horas) devem estar ok

**Ações automáticas:**
1. Atualiza status para `Integralizado`
2. Registra data de integralização
3. Atualiza `aluno.carga_horaria_ac_cumprida`
4. Atualiza `aluno.status_ac` para `Completo` ou `Integralizado`
5. Envia email de aprovação ao aluno
6. Registra em auditoria

**Errors:**
- `400 PROCESSO_INVALIDO`: Status não é ValidacaoConcluida
- `400 ATIVIDADES_REJEITADAS`: Há atividades rejeitadas pendentes
- `409 JA_REGISTRADO`: Processo já foi registrado anteriormente
