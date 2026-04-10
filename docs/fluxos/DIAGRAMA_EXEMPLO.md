## Diagrama de Arquitetura Técnica

CTRL + SHIFT + V para visualizar

```mermaid
graph TD
    subgraph Frontend [React + Vite]
        UI[Componentes Shadcn/UI] --> Forms[React Hook Form + Zod]
    end

    subgraph Backend [FastAPI]
        API[Endpoints/Rotas] --> Logic[Service: Cálculo Regulamento Atividades Complementares]
        Logic --> Models[SQLModel / Entities]
    end

    subgraph Infra [Docker]
        DB[(PostgreSQL)]
    end

    Forms -->|Requisições HTTP/JSON| API
    Models -->|Persistência de Dados| DB
    Logic -.->|Futuro| OCR[Módulo Python OCR]

```

---

## Descrição

- **Frontend**: Interface para Secretaria + Coordenador (Aluno é externo via email)
- **Backend**: API REST com validação de regras (ANEXO A)
- **Banco**: PostgreSQL com 9 tabelas (USUARIO, ALUNO, PROCESSO, ATIVIDADE_ALUNO, DOCUMENTACAO, etc.)
- **OCR**: Futuro - reconhecimento de texto em certificados
