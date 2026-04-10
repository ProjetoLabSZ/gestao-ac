export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-h2">Preferências</h1>
        <p className="text-muted-foreground text-sm mt-1">Customize sua experiência e comportamento do sistema</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Theme Settings */}
        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <h3 className="heading-h4">Tema</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="theme" defaultChecked className="rounded" />
              <span className="text-sm">Automático (conforme sistema operacional)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="theme" className="rounded" />
              <span className="text-sm">Claro</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="theme" className="rounded" />
              <span className="text-sm">Escuro</span>
            </label>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <h3 className="heading-h4">Notificações</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Email de atualizações de processos</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Email de novos mensagens/suporte</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Email de atividade da conta</span>
            </label>
          </div>
        </div>

        {/* Interface Settings */}
        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <h3 className="heading-h4">Interface</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Manter sidebar expandida por padrão</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Mostrar dicas de ferramentas (tooltip)</span>
            </label>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="p-6 rounded-lg border border-border bg-card space-y-4">
          <h3 className="heading-h4">Privacidade</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Seus dados são privados e protegidos conforme LGPD.</p>
            <button className="text-primary hover:underline font-medium">
              Ver política de privacidade
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex gap-3">
          <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Salvar Preferências
          </button>
          <button className="px-6 py-2 rounded-lg border border-input bg-background text-sm font-medium hover:bg-muted transition-colors">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
