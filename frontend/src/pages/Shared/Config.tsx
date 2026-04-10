import { useAuth } from '@/hooks/useAuth'

export function Config() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">Configurações</h1>
        <p className="text-muted-foreground text-sm mt-1">Preferências e configurações da sua conta</p>
      </div>

      <div className="max-w-2xl space-y-4">
        {/* User Info Section */}
        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <h3 className="heading-h4">Informações da Conta</h3>
          <div className="space-y-2">
            <p className="text-sm"><span className="font-semibold">Nome:</span> {user.name}</p>
            <p className="text-sm"><span className="font-semibold">Email:</span> {user.email}</p>
            <p className="text-sm"><span className="font-semibold">Perfil:</span> {user.role}</p>
          </div>
        </div>

        {/* Settings Placeholder */}
        <div className="p-6 rounded-lg border border-border bg-card">
          <p className="text-muted-foreground">Mais configurações em desenvolvimento...</p>
        </div>
      </div>
    </div>
  )
}
