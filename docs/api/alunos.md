# Alunos (Gestão - SEM Login)

Alunos são dados cadastrados. Não fazem login no sistema. Secretaria cria protocolos após receber emails.

---

## `GET /alunos`

Lista alunos cadastrados no sistema.

**Requer:** `admin`, `secretaria`, `coordenador`

**Query Params:**
```
page=1&limit=50&curso_id=uuid-curso&matricula=202401234
```

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid-aluno-1",
      "matricula": "202401234",
      "nome": "João Silva",
      "email": "joao@senai.br",
      "curso_id": "uuid-curso-1",
      "turma": "2024-01",
      "data_ingresso": "2024-01-15T00:00:00Z",
      "data_conclusao_prevista": "2026-06-30T00:00:00Z",
      "carga_horaria_ac_cumprida": 45,
      "status_ac": "Incompleto",
      "created_at": "2024-01-15T10:00:00Z"
    }
  ],
  "pagination": {"total": 500, "page": 1, "limit": 50, "pages": 10}
}
```

---

## `POST /alunos`

Cria novo aluno no sistema (via manual ou import CSV).

**Requer:** `admin`, `secretaria`

**Request:**
```json
{
  "email": "novo.aluno@senai.br",
  "nome": "Carlos Mendes",
  "matricula": "202401999",
  "curso_id": "uuid-curso-1",
  "turma": "2024-02",
  "data_ingresso": "2024-02-01T00:00:00Z",
  "data_conclusao_prevista": "2026-07-30T00:00:00Z"
}
```

**Response (201):**
```json
{
  "data": {
    "id": "uuid-aluno-novo",
    "matricula": "202401999",
    "nome": "Carlos Mendes",
    "email": "novo.aluno@senai.br",
    "curso_id": "uuid-curso-1",
    "turma": "2024-02",
    "data_ingresso": "2024-02-01T00:00:00Z",
    "data_conclusao_prevista": "2026-07-30T00:00:00Z",
    "carga_horaria_ac_cumprida": 0,
    "status_ac": "Incompleto",
    "created_at": "2026-04-10T15:00:00Z"
  }
}
```

**Errors:**
- `409 MATRICULA_ALREADY_EXISTS`: Matrícula duplicada
- `404 CURSO_NOT_FOUND`: Curso não existe

---

## `GET /alunos/{aluno_id}`

Retorna detalhe completo do aluno com status AC atualizado.

**Requer:** `admin`, `secretaria`, `coordenador`

**Response (200):**
```json
{
  "data": {
    "id": "uuid-aluno-1",
    "matricula": "202401234",
    "nome": "João Silva",
    "email": "joao@senai.br",
    "curso_id": "uuid-curso-1",
    "turma": "2024-01",
    "data_ingresso": "2024-01-15T00:00:00Z",
    "data_conclusao_prevista": "2026-06-30T00:00:00Z",
    "carga_horaria_ac_cumprida": 45,
    "status_ac": "Incompleto",
    "created_at": "2024-01-15T10:00:00Z"
  }
}
```

**Errors:**
- `404 ALUNO_NOT_FOUND`: Aluno não existe
