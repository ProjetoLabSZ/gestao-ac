export function Alunos() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">Base de Alunos</h1>
        <p className="text-muted-foreground text-sm mt-1">Gestão de matrículas e turmas</p>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-border bg-card">
          <p className="text-sm font-semibold mb-3">Busca e Filtros</p>
          <p className="text-sm text-muted-foreground">Controles de busca em desenvolvimento...</p>
        </div>

        <div className="p-6 rounded-lg border border-border bg-card">
          <p className="text-muted-foreground">Tabela de alunos em desenvolvimento...</p>
        </div>
      </div>
    </div>
  )
}
