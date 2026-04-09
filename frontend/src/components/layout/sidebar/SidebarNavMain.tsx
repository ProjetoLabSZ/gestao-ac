/**
 * SidebarNavMain.tsx
 *
 * Menu principal de navegação (varia por role).
 */

import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import type { NavItem } from '@/types/navigation'

interface SidebarNavMainProps {
  items: NavItem[]
  className?: string
}

export function SidebarNavMain({ items, className }: SidebarNavMainProps) {
  const location = useLocation()

  return (
    <SidebarGroup className={cn('px-2 group-data-[collapsible=icon]:px-0', className)}>
      {/* Expandido: label + trigger lado a lado */}
      <div className="flex items-center justify-between group-data-[collapsible=icon]:hidden">
        <SidebarGroupLabel className="text-xs font-normal uppercase tracking-wider text-muted-foreground px-2 py-2">
          Menu
        </SidebarGroupLabel>
        <SidebarTrigger
          className="h-10 w-10 rounded-md border border-sidebar-border transition-colors duration-150 hover:bg-sidebar-accent flex items-center justify-center flex-shrink-0 cursor-pointer"
          aria-label="Fechar sidebar"
        />
      </div>

      {/* Colapsado: trigger centralizado */}
      <div className="hidden group-data-[collapsible=icon]:flex items-center justify-center px-2 py-2">
        <SidebarTrigger
          className="h-10 w-10 rounded-md border border-sidebar-border transition-colors duration-150 hover:bg-sidebar-accent flex items-center justify-center flex-shrink-0 cursor-pointer"
          aria-label="Abrir sidebar"
        />
      </div>
      <SidebarGroupContent className="mt-4.5">
        <SidebarMenu className="gap-2.5">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            const showBadge = item.badge != null && item.badge > 0

            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  data-active={isActive}
                  tooltip={item.label}
                  className={cn(
                    'h-12 rounded-lg transition-colors duration-150',
                    isActive
                      ? '!bg-sidebar-primary !text-white font-medium hover:!bg-sidebar-primary/80 hover:!text-white'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  )}
                >
                  <Link
                    to={item.path}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon aria-hidden="true" />
                    <span className="text-sm font-normal">{item.label}</span>
                  </Link>
                </SidebarMenuButton>

                {showBadge && (
                  <SidebarMenuBadge
                    aria-label={`${item.badge} itens pendentes`}
                    className="badge-sm badge-status"
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
  )
}