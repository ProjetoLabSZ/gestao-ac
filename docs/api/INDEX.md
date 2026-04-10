# API Reference - Índice

**Versão:** 1.0  
**Data:** 10 Abril 2026  
**Base URL:** `http://localhost:8000/api`

---

## Leia Primeiro

Comece por aqui para entender como a API funciona:

1. [Convenções](_conventions.md) - Status HTTP, formatos de erro, paginação, rate limiting, códigos de erro

---

## Seções por Domínio

### Segurança & Autenticação
- [Autenticação](auth.md) - Login, refresh token, logout

### Gestão de Usuários
- [Usuários](usuarios.md) - CRUD de usuários (admin, secretaria, coordenador)

### Gestão de Alunos
- [Alunos](alunos.md) - Cadastro de alunos (sem login)

### Catálog & Configuração
- [Cursos](cursos.md) - Cadastro de cursos
- [Atividades](atividades.md) - Catálogo de 37 atividades (ANEXO A)

### Fluxo Principal
- [Processos](processos.md) - Criar, listar, detalhar protocolos de AC
- [Validação](validacao.md) - Validar atividades, finalizar validação
- [Registrar no Histórico](registrar-historico.md) - Registrar AC aprovada

### Compliance & Rastreamento
- [Auditoria](auditoria.md) - Logs de todas as ações

---

## Fluxo Típico de Um Processo

```
1. Aluno envia email → 2. Secretaria cria PROCESSO (POST /processos)
   ↓
3. Secretaria adiciona ATIVIDADES (POST /processos/{id}/atividades)
   ↓
4. Secretaria faz UPLOAD de DOCUMENTAÇÃO (POST /processos/{id}/atividades/{id}/documentacao)
   ↓
5. Coordenador VALIDA cada atividade (PUT /processos/{id}/atividades/{id}/validar)
   ↓
6. Coordenador FINALIZA validação (PUT /processos/{id}/validacao-completa)
   ↓
7. Backend valida REGRAS automaticamente
   ↓
8. Secretaria REGISTRA no histórico (PUT /processos/{id}/registrar-historico)
   ↓
9. Email de aprovação ao aluno
```

---

## Roles & Permissões

| Endpoint | Admin | Secretaria | Coordenador |
|----------|-------|-----------|-------------|
| POST /auth/login | - | ✓ | ✓ |
| GET/POST /usuarios | ✓ | - | - |
| GET/POST /alunos | ✓ | ✓ | ✓ |
| GET /cursos | ✓ | ✓ | ✓ |
| POST /cursos | ✓ | - | - |
| GET /atividades | ✓ | ✓ | ✓ |
| POST /processos | ✓ | ✓ | - |
| GET /processos | ✓ | ✓ | ✓ |
| POST /processos/{id}/atividades | ✓ | ✓ | - |
| PUT /processos/{id}/atividades/{id}/validar | ✓ | - | ✓ |
| PUT /processos/{id}/validacao-completa | ✓ | - | ✓ |
| PUT /processos/{id}/registrar-historico | ✓ | ✓ | - |
| GET /auditoria | ✓ (total) | ✓ (filtrado) | ✓ (filtrado) |

---

## Autenticação

Todos os endpoints (exceto login) requerem header:
```
Authorization: Bearer {access_token}
```

Access token válido por 24h. Use refresh token para renovar (válido 7 dias).

---

## Suporte

Para dúvidas ou issues, veja:
- [Convenções](_conventions.md) - Códigos de erro e formatos
- [Arquitetura do Projeto](../arquitetura/ARQUITETURA.md)
- [Fluxo de Processos](../fluxos/DIAGRAMA_FLUXO_PROCESSOS.md)
- [Regulamento SENAI](../regulamento/REGULAMENTO_RESUMO.md)

