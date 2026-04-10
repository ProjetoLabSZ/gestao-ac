/**
 * AppSidebar.tsx
 *
 * Sidebar principal da aplicação autenticada.
 * Menu e navegação por role do usuário.
 */

import { Sidebar, SidebarContent, SidebarRail, SidebarSeparator } from '@/components/ui/sidebar'
import { navConfig } from '@/types/navigation'
import { useAuth } from '@/hooks/useAuth'
import { SidebarNavMain } from './SidebarNavMain'
import { SidebarNavBottom } from './SidebarNavBottom'

export function AppSidebar() {
  const { user } = useAuth()

  const { main, bottom } = navConfig[user.role]

  return (
    <Sidebar collapsible="icon" className="pt-16">

      <SidebarContent className="flex flex-col px-0 py-2 gap-0">
        <SidebarNavMain items={main} className="flex-1" />

        <SidebarSeparator className="mx-3 my-1" />

        <SidebarNavBottom items={bottom} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}