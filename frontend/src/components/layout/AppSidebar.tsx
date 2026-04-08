/**
 * AppSidebar.tsx
 *
 * Sidebar da aplicação construída com os primitivos do shadcn/ui.
 * Os dados de navegação vêm de types/navigation.ts — o JSX aqui não muda
 * entre roles, apenas os dados injetados pelo navConfig.
 *
 * Funcionalidades herdadas do shadcn/ui:
 *  - Collapse para ícones (ctrl+b)
 *  - Drawer no mobile (breakpoint md)
 *  - Tooltips automáticos quando colapsado
 *  - SidebarRail para redimensionar com clique
 */

import { Link, useLocation } from 'react-router-dom'
import { GraduationCap, ChevronsUpDown, LogOut, User } from 'lucide-react'
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { navConfig } from '@/types/navigation'
import { useAuth } from '@/hooks/useAuth'

// Labels legíveis por role — exibidas no subtítulo do header
const roleLabelMap = {
  admin:       'Administrador',
  secretaria:  'Secretaria',
  coordenador: 'Coordenador(a)',
} as const

export function AppSidebar() {
  const location = useLocation()
  const { user, avatarUrl } = useAuth()

  const { main, bottom } = navConfig[user.role]
  const roleLabel = roleLabelMap[user.role]

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

      {/* ── Navegação principal (varia por role) ────────────────────────── */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {main.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                const showBadge = item.badge != null && item.badge > 0
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

                    {showBadge && (
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

        {/* ── Utilitários (Suporte / Configurações) ────────────────────── */}
        <SidebarGroup>
          <SidebarGroupLabel>Configurações</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {bottom.map((item) => {
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

      {/* ── Perfil do usuário com dropdown ──────────────────────────────── */}
      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  tooltip={`${user.name} · ${roleLabel}`}
                >
                  <img
                    src={avatarUrl}
                    alt={`Avatar de ${user.name}`}
                    className="size-7 shrink-0 rounded-full border border-sidebar-border bg-muted"
                  />
                  <div className="min-w-0 flex-1 leading-tight group-data-[collapsible=icon]:hidden">
                    <p className="text-xs font-semibold truncate">{user.name}</p>
                    <p className="text-[11px] text-sidebar-foreground/50 truncate">
                      {roleLabel}
                    </p>
                  </div>
                  <ChevronsUpDown
                    size={14}
                    className="ml-auto shrink-0 group-data-[collapsible=icon]:hidden text-sidebar-foreground/50"
                    aria-hidden="true"
                  />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="right"
                align="end"
                sideOffset={8}
                className="w-52"
              >
                <div className="px-3 py-2 border-b border-border">
                  <p className="text-xs font-semibold truncate">{user.name}</p>
                  <p className="text-[11px] text-muted-foreground truncate">{user.email}</p>
                </div>

                <DropdownMenuItem>
                  <User size={14} className="mr-2" />
                  Meu Perfil
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="text-destructive focus:text-destructive">
                  <LogOut size={14} className="mr-2" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      {/* Rail clicável para collapse */}
      <SidebarRail />
    </Sidebar>
  )
}
