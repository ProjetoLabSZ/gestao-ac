export function Integralizacao() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">Integralização (SIGE)</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Turmas com 100% das horas — gerar relatório para o SIGE
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-border bg-card">
          <p className="text-sm font-semibold mb-3">Filtros</p>
          <p className="text-sm text-muted-foreground">
            Filtrar por: Status, Data, Curso, etc.
          </p>
        </div>

        <div className="p-6 rounded-lg border border-border bg-card">
          <p className="text-muted-foreground">Lista de turmas qualificadas em desenvolvimento...</p>
        </div>

        <div className="p-4 rounded-lg border border-border bg-card">
          <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
            Gerar Relatório SIGE
          </button>
        </div>
      </div>
    </div>
  )
}
