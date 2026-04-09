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
import { AppSidebar } from './sidebar/AppSidebar'
import { TopBar } from './topbar/TopBar'

export function AppLayout() {
  return (
    <>
      <TopBar />
      <SidebarProvider>
        <AppSidebar />

        <SidebarInset className="flex flex-col pt-16">
          <div className="flex-1 p-6 overflow-auto">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}