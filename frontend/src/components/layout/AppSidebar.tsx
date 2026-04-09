/**
 * AppSidebar.tsx
 *
 * Sidebar principal da aplicação autenticada.
 */

import { Sidebar, SidebarContent, SidebarRail, SidebarSeparator } from '@/components/ui/sidebar'
import { navConfig } from '@/types/navigation'
import { useAuth } from '@/hooks/useAuth'
import { SidebarHeaderComponent } from './sidebar/SidebarHeaderComponent'
import { SidebarNavMain } from './sidebar/SidebarNavMain'
import { SidebarNavBottom } from './sidebar/SidebarNavBottom'
import { SidebarUserProfile } from './sidebar/SidebarUserProfile'

const roleLabelMap = {
  admin:       'Administrador',
  secretaria:  'Secretaria',
  coordenador: 'Coordenador(a)',
} as const

export function AppSidebar() {
  const { user, avatarUrl } = useAuth()

  const { main, bottom } = navConfig[user.role]
  const roleLabel = roleLabelMap[user.role]

  return (
    <Sidebar collapsible="icon">
      <SidebarHeaderComponent />

      <SidebarContent className="flex flex-col px-0 py-2 gap-0">
        <SidebarNavMain items={main} className="flex-1" />

        <SidebarSeparator className="mx-3 my-1" />

        <SidebarNavBottom items={bottom} />
      </SidebarContent>

      <SidebarUserProfile
        user={{
          name: user.name,
          email: user.email,
          role: roleLabel,
          avatarUrl,
        }}
      />

      <SidebarRail />
    </Sidebar>
  )
}