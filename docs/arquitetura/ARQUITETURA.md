# Arquitetura do Projeto

Este projeto utiliza uma abordagem baseada em **Clean Architecture** e **Desacoplamento** para garantir que o sistema seja fácil de manter e expandir (ex: adicionar portal do aluno no futuro).

## Camadas do Backend (FastAPI)
- **`app/core/`**: Contém as configurações globais, segurança e conexão com o banco. É o "coração" técnico do sistema.
- **`app/models/`**: Definições das tabelas do banco (SQLModel). Aqui traduzimos o Regulamento em código.
- **`app/schemas/`**: Validação de dados de entrada e saída (Pydantic).
- **`app/services/`**: Onde fica a lógica baseado nas regras de negócio. Ex: A lógica que calcula se um certificado de 40h deve ser limitado a 20h conforme o documento de regras de cálculo para as as horas complementares.

## Camadas do Frontend (React)
- **Componentização**: Utilizamos o **Shadcn/UI** para componentes de interface, garantindo que não utilizamos duplicação de código em botões e tabelas.
- **Validação**: O **Zod** garante que o formulário não envie dados inválidos para o backend, economizando processamento.

## Fluxo de Integração
1. O Coordenador faz validação de certificados no **Frontend**.
2. O **Backend** recebe os dados e valida conforme regras do REGULAMENTO (ANEXO A).
3. O resultado retorna, passa pela lógica de **Service** (validação de horas, modalidades, limites) e é persistido no **PostgreSQL**.

## Segurança & Autenticação
- **JWT Tokens**: Access token (24h) + Refresh token (7d)
- **Roles-Based Access Control (RBAC)**: 3 roles internos (admin, secretaria, coordenador)
- **Aluno EXTERNO**: Não tem login no sistema (apenas email-based)
- **Audit Logs**: Todos movimentos rastreados em AUDITORIA_LOG

## Banco de Dados (PostgreSQL)
- **9 Tabelas principais**: USUARIO, ALUNO, PROCESSO, ATIVIDADE_ALUNO, DOCUMENTACAO, AUDITORIA_LOG, COORDENADOR, CURSO, ATIVIDADE
- Ver [DIAGRAMA_ENTIDADES_BD.md](../arquitetura/DIAGRAMA_ENTIDADES_BD.md) para ER completo
