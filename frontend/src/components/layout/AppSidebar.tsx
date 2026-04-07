/**
 * AppSidebar.tsx
 *
 * Sidebar da aplicação construída com os primitivos do shadcn/ui.
 * Os dados de navegação vêm de types/navigation.ts — nunca duplique aqui.
 *
 * Funcionalidades herdadas do shadcn/ui:
 *  - Collapse para ícones (ctrl+b)
 *  - Drawer no mobile (breakpoint md)
 *  - Tooltips automáticos quando colapsado
 *  - SidebarRail para redimensionar com clique
 */

import { Link, useLocation } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { mainNav, bottomNav } from '@/types/navigation'

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar collapsible="icon">
      {/* ── Logo / identidade ───────────────────────────────────────────── */}
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1">
          {/* Ícone sempre visível — colapsa para apenas o ícone */}
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary">
            <GraduationCap size={16} className="text-sidebar-primary-foreground" aria-hidden="true" />
          </div>

          {/* Nome e sub-título somem quando colapsado */}
          <div className="min-w-0 flex-1 leading-tight group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-bold tracking-tight truncate">AC Manager</p>
            <p className="text-[11px] text-sidebar-foreground/50 font-medium truncate">
              SENAI · Horas Complementares
            </p>
          </div>

          {/* Botão de toggle — fica no canto direito do header */}
          <SidebarTrigger className="ml-auto shrink-0 group-data-[collapsible=icon]:hidden" />
        </div>
      </SidebarHeader>

      {/* ── Navegação principal ─────────────────────────────────────────── */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.label}
                    >
                      <Link
                        to={item.path}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <Icon aria-hidden="true" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>

                    {item.badge != null && item.badge > 0 && (
                      <SidebarMenuBadge
                        aria-label={`${item.badge} itens pendentes`}
                      >
                        {item.badge}
                      </SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* ── Utilitários ─────────────────────────────────────────────────── */}
        <SidebarGroup>
          <SidebarGroupLabel>Configurações</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomNav.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.label}
                      size="sm"
                    >
                      <Link
                        to={item.path}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <Icon aria-hidden="true" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ── Perfil do coordenador ───────────────────────────────────────── */}
      <SidebarFooter>
        <SidebarSeparator />
        <div className="flex items-center gap-3 px-2 py-1.5 group-data-[collapsible=icon]:justify-center">
          <img
            src="https://api.dicebear.com/8.x/avataaars/svg?seed=Gabriella"
            alt="Avatar de Gabriella Costa"
            className="size-7 shrink-0 rounded-full border border-sidebar-border bg-muted"
          />
          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="text-xs font-semibold truncate">Gabriella Costa</p>
            <p className="text-[11px] text-sidebar-foreground/50 truncate">
              Coordenadora · TI
            </p>
          </div>
        </div>
      </SidebarFooter>

      {/* Rail clicável para collapse */}
      <SidebarRail />
    </Sidebar>
  )
}
