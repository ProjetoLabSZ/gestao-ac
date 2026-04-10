# Usuários

---

## `GET /usuarios`

Lista todos usuários do sistema.

**Requer:** `admin`

**Query Params:**
```
page=1&limit=50&role=coordenador&ativo=true
```

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid-1",
      "email": "user@senai.br",
      "nome": "João Silva",
      "role": "coordenador",
      "ativo": true,
      "created_at": "2026-01-15T10:00:00Z",
      "updated_at": "2026-04-10T14:00:00Z"
    }
  ],
  "pagination": {"total": 250, "page": 1, "limit": 50, "pages": 5}
}
```

---

## `POST /usuarios`

Cria novo usuário (Admin, Secretaria ou Coordenador).

**Requer:** `admin`

**Request:**
```json
{
  "email": "novo@senai.br",
  "nome": "Maria Santos",
  "role": "coordenador",
  "senha": "SenhaSegura123"
}
```

**Response (201):**
```json
{
  "data": {
    "id": "uuid-novo",
    "email": "novo@senai.br",
    "nome": "Maria Santos",
    "role": "coordenador",
    "ativo": true,
    "created_at": "2026-04-10T15:00:00Z"
  }
}
```

**Errors:**
- `409 EMAIL_ALREADY_EXISTS`: Email já cadastrado
- `422 INVALID_ROLE`: Role deve ser `admin`, `secretaria` ou `coordenador`
- `422 INVALID_PASSWORD`: Senha não atende requisitos (mínimo 8 caracteres, 1 maiúscula, 1 número)

---

## `PUT /usuarios/{user_id}`

Atualiza dados de usuário.

**Requer:** `admin` ou self (usuário próprio)

**Request:**
```json
{
  "nome": "João Silva Updated",
  "ativo": false
}
```

**Response (200):**
```json
{
  "data": {
    "id": "uuid-1",
    "email": "user@senai.br",
    "nome": "João Silva Updated",
    "role": "coordenador",
    "ativo": false,
    "updated_at": "2026-04-10T15:30:00Z"
  }
}
```

**Errors:**
- `404 USER_NOT_FOUND`: Usuário não existe
- `403 INSUFFICIENT_PERMISSIONS`: Não tem permissão para editar este usuário
