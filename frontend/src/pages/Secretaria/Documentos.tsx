export function Documentos() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">Central de Documentos</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Baixar formulários oficiais (Anexo C) para enviar ao aluno
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-border bg-card">
          <p className="text-sm font-semibold mb-3">Filtros</p>
          <p className="text-sm text-muted-foreground">
            Filtrar por: Categoria, Tipo de Documento, etc.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-4 rounded-lg border border-border bg-card">
              <p className="text-sm font-semibold mb-2">Documento {i}</p>
              <p className="text-xs text-muted-foreground">Clique para baixar</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
