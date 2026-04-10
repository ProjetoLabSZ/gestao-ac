# Convenções API - Gestão de Atividades Complementares

**Versão:** 1.0  
**Data:** 10 Abril 2026  
**Base URL:** `http://localhost:8000/api` (dev)
**Autenticação:** JWT Bearer Token (3 roles internos apenas)  
**Content-Type:** `application/json`

---

## Status HTTP Esperados

| Código  | Significado           | Uso                                 |
| ------- | --------------------- | ----------------------------------- |
| **200** | OK                    | Requisição bem-sucedida             |
| **201** | Created               | Recurso criado com sucesso          |
| **204** | No Content            | Sucesso, sem corpo de resposta      |
| **400** | Bad Request           | Erro de validação de dados          |
| **401** | Unauthorized          | Token inválido, expirado ou ausente |
| **403** | Forbidden             | Autenticado mas sem permissão       |
| **404** | Not Found             | Recurso não encontrado              |
| **409** | Conflict              | Conflito (ex: matrícula duplicada)  |
| **422** | Unprocessable Entity  | Erro de validação semântica         |
| **500** | Internal Server Error | Erro no servidor                    |

---

## Formato de Erro

Todos os erros retornam este formato:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Campos obrigatórios faltando",
    "details": {
      "email": ["Email é obrigatório", "Email inválido"],
      "senha": ["Mínimo 8 caracteres"]
    },
    "timestamp": "2026-04-10T15:30:00Z"
  }
}
```

---

## Paginação

Endpoints com múltiplos resultados retornam:

```json
{
  "data": [...],
  "pagination": {
    "total": 150,
    "page": 1,
    "limit": 50,
    "pages": 3
  }
}
```

Query params padrão:

- `page`: número da página (padrão: 1)
- `limit`: itens por página (padrão: 50, máximo: 100)

---

## Rate Limiting

- `/auth/login`: 5 requisições / 10 minutos por IP
- `/auth/refresh`: 10 requisições / 1 minuto por user
- Outros endpoints: 100 requisições / 1 minuto por user

Respostas incluem headers:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1712871000
```

---

## Versionamento

Versões futuras via URL:

```
GET /api/v1/processos      (atual)
GET /api/v2/processos      (futuro)
```

---

## Códigos de Erro Específicos

| Code                       | HTTP | Descrição                 |
| -------------------------- | ---- | ------------------------- |
| `INVALID_CREDENTIALS`      | 401  | Email ou senha incorretos |
| `TOKEN_EXPIRED`            | 401  | JWT expirado              |
| `INSUFFICIENT_PERMISSIONS` | 403  | User sem role adequada    |
| `VALIDATION_ERROR`         | 400  | Dados inválidos           |
| `EMAIL_ALREADY_EXISTS`     | 409  | Email duplicado           |
| `MATRICULA_ALREADY_EXISTS` | 409  | Matrícula duplicada       |
| `PROCESSO_VAZIO`           | 400  | Sem atividades            |
| `PRAZO_EXPIRADO`           | 400  | Fora calendário acadêmico |
| `ARQUIVO_MUITO_GRANDE`     | 413  | File > 10MB               |
| `TIPO_ARQUIVO_INVALIDO`    | 422  | Formato não permitido     |
