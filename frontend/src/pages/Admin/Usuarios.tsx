export function Usuarios() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">Usuários do Sistema</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Cadastrar e gerenciar Secretarias e Coordenadores
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-border bg-card">
          <p className="text-sm font-semibold mb-3">Filtros e Busca</p>
          <p className="text-sm text-muted-foreground">Controles de busca em desenvolvimento...</p>
        </div>

        <div className="p-6 rounded-lg border border-border bg-card">
          <p className="text-muted-foreground">Lista de usuários em desenvolvimento...</p>
        </div>
      </div>
    </div>
  )
}
