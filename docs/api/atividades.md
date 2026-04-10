# Atividades (ANEXO A)

Catálogo de 37 atividades complementares conforme SENAI 2022.

---

## `GET /atividades`

Lista catálogo de atividades (37 items do ANEXO A).

**Requer:** `admin`, `secretaria`, `coordenador`

**Query Params (opcional):**
```
modalidade=Ensino&tipo=Workshop&page=1&limit=50
```

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid-atividade-1",
      "modalidade": "Ensino",
      "tipo": "Cursos de capacitação",
      "nome": "Cursos capacitação profissional...",
      "carga_horaria_equivalente": 20,
      "limite_anual": 40,
      "limite_total": null,
      "limite_por_semestre": null,
      "tipo_documentacao": "Certificado",
      "obs": "Na área do curso",
      "ativo": true
    }
  ]
}
```

**Campos:**
- `modalidade`: Ensino, Pesquisa, Extensão ou Cultural
- `carga_horaria_equivalente`: Horas que equivalem
- `limite_anual`: Máximo por ano (se nulo, sem limite)
- `limite_total`: Máximo total (se nulo, sem limite)
- `limite_por_semestre`: Máximo por semestre (se nulo, sem limite)
- `tipo_documentacao`: Tipo de documento necessário (Certificado, Declaração, Histórico, Lista, Comprovante)
