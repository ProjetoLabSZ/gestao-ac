/**
 * AppLayout.tsx
 *
 * Esqueleto da aplicação autenticada.
 * Usa SidebarProvider para gerenciar o estado de collapse/mobile.
 *
 * TODO: adicionar guard de autenticação
 *   ex: se !user → <Navigate to="/login" />
 */

import { Outlet } from 'react-router-dom'
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'
import { AppSidebar } from './AppSidebar'

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}