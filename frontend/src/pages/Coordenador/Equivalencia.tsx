export function Equivalencia() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">Guia de Equivalência</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Consulta das regras do Anexo A (somente leitura)
        </p>
      </div>

      <div className="max-w-4xl space-y-4">
        <div className="p-4 rounded-lg border border-border bg-card">
          <p className="text-sm font-semibold mb-3">Busca</p>
          <input
            type="text"
            placeholder="Buscar atividade..."
            className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
          />
        </div>

        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <h3 className="heading-h4">Tabela de Equivalências</h3>
          <p className="text-sm text-muted-foreground">Conteúdo em desenvolvimento...</p>
        </div>

        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <h3 className="heading-h4">Categorias</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Monitoria (até 40h)</p>
            <p>• Extensão (até X horas)</p>
            <p>• Pesquisa (até X horas)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
