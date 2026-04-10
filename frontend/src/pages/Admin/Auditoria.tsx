export function Auditoria() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">Logs de Auditoria</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Rastro de segurança das ações no sistema
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-border bg-card">
          <p className="text-sm font-semibold mb-3">Filtros</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Usuário</p>
            <p>• Data/Hora</p>
            <p>• Ação</p>
            <p>Formulário em desenvolvimento...</p>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-card">
          <p className="text-muted-foreground">Tabela de logs em desenvolvimento...</p>
        </div>
      </div>
    </div>
  )
}
