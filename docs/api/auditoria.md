# Auditoria

---

## `GET /auditoria`

Lista logs de auditoria (rastreabilidade de todas as ações).

**Requer:** `admin`, `secretaria`, `coordenador` (filtrado por seu escopo)

**Query Params:**
```
usuario_id=uuid&acao=Validar&processo_id=uuid&data_desde=2026-04-01&page=1&limit=50
```

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid-log-1",
      "usuario_id": "uuid-coord-1",
      "usuario": {
        "nome": "Maria Coordenadora",
        "email": "maria@senai.br",
        "role": "coordenador"
      },
      "processo_id": "uuid-processo-1",
      "acao": "Validar",
      "descricao": "Atividade 'Cursos capacitação' validada",
      "dados_antes": {"status": "Pendente"},
      "dados_depois": {"status": "Validada"},
      "ip_address": "192.168.1.100",
      "created_at": "2026-04-10T16:00:00Z"
    }
  ],
  "pagination": {"total": 2500, "page": 1, "limit": 50, "pages": 50}
}
```

**Ações rastreadas:**
- `Criar`: Novo recurso criado (usuário, aluno, processo, atividade)
- `Validar`: Atividade validada por coordenador
- `Rejeitar`: Atividade rejeitada
- `Integralizar`: AC integralizada no histórico
- `Login`: Usuário fez login
- `Logout`: Usuário fez logout

**Filtros:**
- `usuario_id`: Filtra por quem fez a ação
- `acao`: Tipo de ação
- `processo_id`: Filtra por processo
- `data_desde`: Data inicial (ISO 8601)
- `data_ate`: Data final (ISO 8601)

**Permissões:**
- `admin`: Vê toda auditoria
- `secretaria`: Vê ações dele + coordenador (seu curso)
- `coordenador`: Vê apenas ações dele
