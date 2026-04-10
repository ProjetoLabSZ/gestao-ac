# Cursos

---

## `GET /cursos`

Lista todos os cursos cadastrados.

**Requer:** `admin`, `secretaria`, `coordenador`

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid-curso-1",
      "nome": "Engenharia de Software",
      "codigo_mec": "UNQ001",
      "carga_horaria_ac_obrigatoria": 200,
      "descricao": "Formação em engenharia de software...",
      "coordenador_id": "uuid-coord-1",
      "created_at": "2023-01-01T00:00:00Z"
    }
  ]
}
```

---

## `POST /cursos`

Cria novo curso no catálogo.

**Requer:** `admin`

**Request:**
```json
{
  "nome": "Engenharia de Dados",
  "codigo_mec": "UNQ002",
  "carga_horaria_ac_obrigatoria": 180,
  "descricao": "Formação em engenharia de dados com foco em analytics"
}
```

**Response (201):**
```json
{
  "data": {
    "id": "uuid-curso-novo",
    "nome": "Engenharia de Dados",
    "codigo_mec": "UNQ002",
    "carga_horaria_ac_obrigatoria": 180,
    "descricao": "Formação em engenharia de dados com foco em analytics",
    "created_at": "2026-04-10T15:00:00Z"
  }
}
```

**Errors:**
- `409 CODIGO_MEC_ALREADY_EXISTS`: Código MEC já existe
- `422 VALIDATION_ERROR`: Dados inválidos
