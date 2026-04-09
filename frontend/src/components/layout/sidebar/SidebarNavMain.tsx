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
      <SidebarGroupLabel className="text-[10px] font-normal uppercase tracking-wider text-sidebar-foreground/50 px-2 py-2 group-data-[collapsible=icon]:hidden">
        Menu
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="gap-2.5">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            const showBadge = item.badge != null && item.badge > 0

            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.label}
                  className={cn(
                    'transition-colors duration-150 h-10 rounded-lg',
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

                {showBadge && (
                  <SidebarMenuBadge
                    aria-label={`${item.badge} itens pendentes`}
                    className="bg-senai-red text-white font-medium text-[10px]"
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