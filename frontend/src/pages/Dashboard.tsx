/**
 * Dashboard.tsx — placeholder visual
 *
 * Valida que o AppLayout (sidebar + conteúdo) renderiza corretamente. O conteúdo real será implementado em branches futuras.
 */

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Visão geral das atividades complementares. Implementação completa em breve.
        </p>
      </div>

      {/* Cards placeholder */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {['Total de Alunos', 'Horas Validadas', 'Pendências'].map((label) => (
          <div
            key={label}
            className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <p className="mt-2 text-3xl font-bold">—</p>
          </div>
        ))}
      </div>
    </div>
  )
}