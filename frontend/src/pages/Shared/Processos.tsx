import { useAuth } from '@/hooks/useAuth'

export function Processos() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">
          {user.role === 'secretaria' ? 'Consulta de Processos' : 'Gestão de Processos'}
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          {user.role === 'secretaria'
            ? 'Verifique se o Coordenador já assinou para lançar no SIGE'
            : 'Filtrar por: Aguardando Parecer · Em Análise · Finalizados'}
        </p>
      </div>

      <div className="space-y-4">
        {/* Filters */}
        <div className="p-4 rounded-lg border border-border bg-card">
          <p className="text-sm font-semibold mb-3">Filtros</p>
          <p className="text-sm text-muted-foreground">Controles de filtro em desenvolvimento...</p>
        </div>

        {/* Results */}
        <div className="p-6 rounded-lg border border-border bg-card">
          <p className="text-muted-foreground">Lista de processos em desenvolvimento...</p>
        </div>
      </div>
    </div>
  )
}
