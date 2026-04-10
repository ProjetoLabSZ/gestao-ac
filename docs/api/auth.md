# Autenticação

---

## `POST /auth/login`

Autentica usuário (Admin, Secretaria, Coordenador) e retorna tokens JWT.

**Requer:** Sem autenticação prévia  
**Request:**
```json
{
  "email": "coordenador@senai.br",
  "senha": "SenhaSegura123"
}
```

**Response (200):**
```json
{
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "user_id": "uuid-123",
      "email": "coordenador@senai.br",
      "nome": "João Silva",
      "role": "coordenador"
    }
  }
}
```

**Errors:**
- `401 INVALID_CREDENTIALS`: Email ou senha incorretos
- `404 USER_NOT_FOUND`: Usuário não encontrado

**Nota:** Apenas usuários com roles `admin`, `secretaria` ou `coordenador` podem fazer login. Alunos não têm acesso ao sistema.

---

## `POST /auth/refresh`

Gera novo access token usando refresh token válido.

**Requer:** Sem autenticação (refresh_token no body)

**Request:**
```json
{
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response (200):**
```json
{
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Errors:**
- `401 INVALID_TOKEN`: Token expirado ou inválido
- `401 TOKEN_REVOKED`: Token foi revogado

---

## `POST /auth/logout`

Revoga refresh token (efetua logout).

**Requer:** `admin`, `secretaria`, `coordenador`

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request:**
```json
{}
```

**Response (204):**
Sem corpo

**Errors:**
- `401 UNAUTHORIZED`: Token não fornecido ou inválido
