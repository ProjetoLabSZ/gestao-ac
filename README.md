# Sistema de Gestão de Atividades Complementares

Este projeto automatiza a validação de Atividades Complementares (AC) para coordenadores da Faculdade SENAI. O sistema calcula automaticamente as equivalências de horas e gera relatórios de integralização.

## 🚀 Stack Tecnológica

### Frontend

- **[React + Vite](https://vitejs.dev/)**: Core e build tool.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática e segurança.
- **[Shadcn/UI](https://ui.shadcn.com/)** & **Tailwind CSS**: Interface e estilização.
- **[React Hook Form](https://react-hook-form.com/)** & **[Zod](https://zod.dev/)**: Formulários e validação.

### Backend

- **[FastAPI](https://fastapi.tiangolo.com/)**: Framework web de alta performance.
- **[SQLModel](https://sqlmodel.tiangolo.com/)** & **PostgreSQL**: ORM e Banco de dados relacional.
- **[Alembic](https://alembic.sqlalchemy.org/)**: Controle de versões do banco (migrations).
- **[Loguru](https://loguru.org/)** & **[Pytest](https://docs.pytest.org/)**: Logs e testes automatizados.

---

## 🛠️ Como Executar o Projeto

A forma mais simples e recomendada de rodar o ambiente completo é utilizando **Docker**.

### 1. Pré-requisitos

- Docker e Docker Compose instalados.
- Criar o arquivo `.env` na raiz do projeto (use o `.env.example` como base).

### 2. Rodando com Docker (Recomendado)

Na raiz do projeto, execute:

```bash
docker compose up -d --build # Para rodar o projeto a primeira vez ou quando houver alguma atualização no Dockerfile, docker-compose.yml, ou novas dependências adicionadas
docker compose up -d
```

- **Obs**: Caso dê erro 403, pode ser bloqueio da rede do Senai. Tente rodar por uma rede externa (4G do celular), depois que

- **Frontend**: `http://localhost:5173`
- **Backend**: `http://localhost:8000`
- **API Docs (Swagger)**: `http://localhost:8000/docs`

### 3. Desenvolvimento Local (Sem Docker)

Se precisar rodar fora do Docker para depuração:

### Backend

1. Entre na pasta: `cd backend`
2. Crie o ambiente virtual:
   - Linux/Mac: `python3 -m venv venv`
   - Windows: `python -m venv venv`
3. Ative o ambiente:
   - Linux/Mac: `source venv/bin/activate`
   - Windows: `.\venv\Scripts\activate`
4. Instale as dependências: `pip install -r requirements.txt`
5. Inicie: `uvicorn app.main:app --reload`

### Frontend

1. Entre na pasta: `cd frontend`
2. Instale os pacotes: `npm install` ou `npm i`
3. Inicie: `npm run dev`

---

## 📖 Documentação e Boas Práticas

Para que o projeto continue organizado, siga estas regras:

1. **Variáveis de Ambiente**: Nunca envie o arquivo .env para o Git. Se criar uma variável nova, adicione-a no .env.example.
2. **Documentação**: Na pasta `/docs` estão as regras de negócio e diagramas de banco (caso precise criar algum novo doc, criar nessa pasta).
3. **Commits**: Utilize o padrão de [Conventional Commits](https://www.conventionalcommits.org/) (ex: `feat: adiciona login`, `fix: ajustado campo do cadastro`, `docs: readme atualizado`).
4. **Novas Dependências**:
   - No Backend: Após instalar, rode `pip freeze > requirements.txt`.
   - No Frontend: Para instalar uma nova dependência, use `npm install <nome_do_pacote>` (o package.json atualizará automaticamente).

## 🤝 Fluxo de Trabalho (Git Flow)

Para manter a organização e a qualidade do código:

1. **Branches**: Nunca commite diretamente na `main` ou `dev`.
2. **Features**: Crie uma branch `feat/nome-da-tarefa` a partir da `dev`.
3. **Pull Requests (PRs)**: Ao terminar, abra um PR para a `dev`. 
4. **Code Review**: Pelo menos 1 colega revisa o código e aprova para mesclar (merge).
5. **Estabilidade**: A `main` é reservada para versões estáveis e testadas.

## 📄 Licença

Projeto desenvolvido para fins acadêmicos e laboratoriais no SENAI ZEISS.

```