export function Suporte() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">Suporte</h1>
        <p className="text-muted-foreground text-sm mt-1">Centro de ajuda e chamados de suporte</p>
      </div>

      <div className="max-w-2xl space-y-4">
        <div className="p-6 rounded-lg border border-border bg-card">
          <h3 className="heading-h4 mb-4">FAQs</h3>
          <p className="text-muted-foreground">Dúvidas frequentes em desenvolvimento...</p>
        </div>

        <div className="p-6 rounded-lg border border-border bg-card">
          <h3 className="heading-h4 mb-4">Abrir Chamado</h3>
          <p className="text-muted-foreground">Formulário de suporte em desenvolvimento...</p>
        </div>
      </div>
    </div>
  )
}
