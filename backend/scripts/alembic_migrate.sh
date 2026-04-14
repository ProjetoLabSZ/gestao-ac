#!/bin/bash

# Verifica se a mensagem foi passada
if [ -z "$1" ]; then
    echo "[ERRO] Você esqueceu a mensagem da migration!"
    echo "Uso correto: ./scripts/migrate.sh \"Sua mensagem de alteracao\""
    exit 1
fi

echo "[1/3] Gerando os arquivos de migration..."
docker compose exec backend alembic revision --autogenerate -m "$1"

echo "[2/3] Aplicando as alterações no banco de dados..."
docker compose exec backend alembic upgrade head

echo "[3/3] Sucesso! Banco de dados atualizado."