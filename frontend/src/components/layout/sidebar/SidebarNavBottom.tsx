/**
 * SidebarNavBottom.tsx
 *
 * Menu de configurações e utilitários (Suporte, Configurações).
 */

import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import type { NavItem } from '@/types/navigation'

interface SidebarNavBottomProps {
  items: NavItem[]
}

export function SidebarNavBottom({ items }: SidebarNavBottomProps) {
  const location = useLocation()

  return (
    <SidebarGroup className="px-2 group-data-[collapsible=icon]:px-0">
      <SidebarGroupLabel className="text-[10px] font-normal uppercase tracking-wider text-sidebar-foreground/50 px-2 py-2 group-data-[collapsible=icon]:hidden">
        Configurações
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="gap-2.5">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path

            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.label}
                  size="sm"
                  className={cn(
                    'transition-colors duration-150 h-9 rounded-lg',
                    isActive
                      ? 'bg-sidebar-primary text-white font-medium hover:bg-sidebar-primary hover:text-white'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  )}
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
  )
}