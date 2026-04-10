import { useAuth } from '@/hooks/useAuth'

export function Profile() {
  const { user, avatarUrl } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">Meu Perfil</h1>
        <p className="text-muted-foreground text-sm mt-1">Informações e dados da sua conta</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Avatar Section */}
        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <h3 className="heading-h4">Avatar</h3>
          <div className="flex items-center gap-4">
            <img
              src={avatarUrl}
              alt={user.name}
              className="size-16 rounded-full object-cover border-2 border-sidebar-primary"
            />
            <button className="px-4 py-2 rounded-lg border border-input bg-background text-sm font-medium hover:bg-muted transition-colors">
              Alterar Avatar
            </button>
          </div>
        </div>

        {/* Personal Info Section */}
        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <h3 className="heading-h4">Informações Pessoais</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground">Nome Completo</label>
              <p className="text-sm text-muted-foreground mt-1">{user.name}</p>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Email</label>
              <p className="text-sm text-muted-foreground mt-1">{user.email}</p>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Perfil/Função</label>
              <p className="text-sm text-muted-foreground mt-1 capitalize">{user.role}</p>
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <h3 className="heading-h4">Informações da Conta</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">Última sincronização:</span> Há 2 minutos
            </div>
            <div>
              <span className="font-semibold text-foreground">ID da Conta:</span> {user.id || 'N/A'}
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          Editar Perfil
        </button>
      </div>
    </div>
  )
}
