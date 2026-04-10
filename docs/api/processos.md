# Processos (Requerimento de AC)

---

## `POST /processos`

Cria novo processo (protocolo). Secretaria cria após receber email do aluno.

**Requer:** `secretaria`

**Request:**
```json
{
  "aluno_id": "uuid-aluno-1",
  "obs": "Email recebido de João Silva com certificados de cursos"
}
```

**Response (201):**
```json
{
  "data": {
    "id": "uuid-processo-1",
    "aluno_id": "uuid-aluno-1",
    "status": "AguardandoValidacao",
    "horas_cumpridas": 0,
    "modalidades_atendidas": 0,
    "data_criacao": "2026-04-10T15:00:00Z",
    "created_at": "2026-04-10T15:00:00Z"
  }
}
```

---

## `GET /processos`

Lista processos com filtros.

**Requer:** `secretaria`, `coordenador`, `admin`

**Query Params:**
```
status=AguardandoValidacao&page=1&limit=20
```

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid-processo-1",
      "aluno_id": "uuid-aluno-1",
      "status": "AguardandoValidacao",
      "horas_cumpridas": 45,
      "modalidades_atendidas": 2,
      "data_criacao": "2026-03-01T00:00:00Z",
      "data_validacao": "2026-03-15T00:00:00Z",
      "coordenador_id_validador": "uuid-coord-1"
    }
  ],
  "pagination": {"total": 25, "page": 1, "limit": 20, "pages": 2}
}
```

**Status possíveis:**
- `AguardandoValidacao`: Secretaria criou com documentos
- `ValidacaoConcluida`: Coordenador finalizou validação
- `Integralizado`: AC aprovada e registrada
- `Rejeitado`: Falha em regras ou documentação

---

## `GET /processos/{processo_id}`

Detalhe completo do processo com atividades associadas.

**Requer:** `secretaria`, `coordenador`, `admin`

**Response (200):**
```json
{
  "data": {
    "id": "uuid-processo-1",
    "aluno": {
      "id": "uuid-aluno-1",
      "matricula": "202401234",
      "nome": "João Silva"
    },
    "status": "AguardandoValidacao",
    "horas_cumpridas": 45,
    "modalidades_atendidas": 2,
    "atividades": [
      {
        "id": "uuid-atividade-aluno-1",
        "atividade": {
          "id": "uuid-atividade-1",
          "tipo": "Cursos de capacitação",
          "modalidade": "Ensino"
        },
        "horas_cumpridas": 20,
        "status_validacao": "Pendente",
        "data_execucao": "2026-02-01T00:00:00Z",
        "data_validacao": null,
        "documentacao": {
          "id": "uuid-doc-1",
          "nome_arquivo": "certificado.pdf",
          "url_s3_ou_path": "s3://bucket/docs/certificado.pdf",
          "legitimada": true
        }
      }
    ]
  }
}
```

---

## `POST /processos/{processo_id}/atividades`

Secretaria adiciona atividade ao processo.

**Requer:** `secretaria`

**Request:**
```json
{
  "atividade_id": "uuid-atividade-1",
  "horas_cumpridas": 20,
  "data_execucao": "2026-02-01T00:00:00Z"
}
```

**Response (201):**
```json
{
  "data": {
    "id": "uuid-atividade-aluno-1",
    "processo_id": "uuid-processo-1",
    "atividade_id": "uuid-atividade-1",
    "horas_cumpridas": 20,
    "status_validacao": "Pendente",
    "data_execucao": "2026-02-01T00:00:00Z",
    "data_submissao": "2026-04-10T15:30:00Z"
  }
}
```

---

## `DELETE /processos/{processo_id}/atividades/{atividade_aluno_id}`

Remove atividade do processo (apenas se processo em AguardandoValidacao).

**Requer:** `secretaria`

**Response (204):**
Sem corpo

---

## `POST /processos/{processo_id}/atividades/{atividade_aluno_id}/documentacao`

Upload de documentação (certificado, declaração).

**Requer:** `secretaria`

**Request (multipart/form-data):**
```
file: <binary>
tipo_documento: Certificado
instituicao_emitente: SENAI Goiás
```

**Response (201):**
```json
{
  "data": {
    "id": "uuid-doc-1",
    "url": "s3://bucket/docs/certificado-uuid.pdf",
    "hash": "sha256hash..."
  }
}
```

**Errors:**
- `413 FILE_TOO_LARGE`: Arquivo > 10MB
- `422 INVALID_FILE_TYPE`: Tipo não permitido (apenas PDF, JPG, PNG)
