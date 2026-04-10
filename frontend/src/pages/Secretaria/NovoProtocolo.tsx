export function NovoProtocolo() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">Novo Protocolo</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Registrar PDF de requerimento recebido por e-mail
        </p>
      </div>

      <div className="max-w-2xl space-y-4">
        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <h3 className="heading-h4">Upload de Documento</h3>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <p className="text-muted-foreground">Arraste o PDF aqui ou clique para selecionar</p>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <h3 className="heading-h4">Dados do Protocolo</h3>
          <p className="text-sm text-muted-foreground">Formulário em desenvolvimento...</p>
        </div>
      </div>
    </div>
  )
}
