@echo off
if "%~1"=="" (
    echo [ERRO] Voce esqueceu a mensagem da migration
    echo Uso correto: scripts\migrate.bat "Sua mensagem de alteracao"
    exit /b 1
)

echo [1/3] Gerando os arquivos de migration...
docker compose exec backend alembic revision --autogenerate -m "%~1" || exit /b 1

echo [2/3] Aplicando as alteracoes no banco de dados...
docker compose exec backend alembic upgrade head || exit /b 1

echo [3/3] Sucesso! Banco de dados atualizado.
exit /b 0