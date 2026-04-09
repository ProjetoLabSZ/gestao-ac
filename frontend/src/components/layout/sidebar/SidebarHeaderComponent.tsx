/**
 * SidebarHeaderComponent.tsx
 *
 * Header da sidebar com logo + trigger de collapse.
 */

import { GraduationCap } from 'lucide-react'
import { SidebarHeader, SidebarTrigger } from '@/components/ui/sidebar'

export function SidebarHeaderComponent() {
  return (
    <SidebarHeader className="border-b border-sidebar-border/50 p-0">
      {/* Expandido: layout horizontal */}
      <div className="group-data-[collapsible=icon]:hidden flex px-3 py-3 gap-3 items-center">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary shadow-sm">
          <GraduationCap size={20} className="text-sidebar-primary-foreground" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1 leading-tight">
          <p className="text-sm font-medium tracking-tight truncate text-sidebar-foreground">Gerenciador AC</p>
          <p className="text-[11px] text-sidebar-foreground/50 truncate">
            SENAI · AC
          </p>
        </div>
        <SidebarTrigger
          className="ml-auto shrink-0 h-7 w-7 rounded-md border border-sidebar-border transition-colors duration-150 hover:bg-sidebar-accent"
          aria-label="Fechar sidebar"
        />
      </div>

      {/* Colapsado: logo centralizado + trigger embaixo */}
      <div className="hidden group-data-[collapsible=icon]:flex flex-col items-center justify-center gap-3 px-3 py-4">
        <SidebarTrigger
          className="h-7 w-7 rounded-md border border-sidebar-border transition-colors duration-150 hover:bg-sidebar-accent flex items-center justify-center"
          aria-label="Abrir sidebar"
          title="Abrir (Ctrl+B)"
        />
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary shadow-sm">
          <GraduationCap size={18} className="text-sidebar-primary-foreground" aria-hidden="true" />
        </div>
      </div>
    </SidebarHeader>
  )
}