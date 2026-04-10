import { useAuth } from '@/hooks/useAuth'

export function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Bem-vindo(a), {user.name}!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Placeholder Cards */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 rounded-lg border border-border bg-card">
            <div className="h-20 bg-skeleton rounded animate-pulse" />
          </div>
        ))}
      </div>

      <div className="p-6 rounded-lg border border-border bg-card">
        <p className="text-muted-foreground">Conteúdo do dashboard em desenvolvimento...</p>
      </div>
    </div>
  )
}
