/**
 * SidebarUserProfile.tsx
 *
 * Seção do footer com perfil do usuário e dropdown menu.
 */

import { ChevronsUpDown, LogOut, User } from 'lucide-react'
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface UserProfileData {
  name: string
  email: string
  role: string
  avatarUrl: string
}

interface SidebarUserProfileProps {
  user: UserProfileData
}

export function SidebarUserProfile({ user }: SidebarUserProfileProps) {
  return (
    <SidebarFooter className="border-t border-sidebar-border/50 pt-2">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="transition-colors duration-150 data-[state=open]:bg-sidebar-accent hover:bg-sidebar-accent rounded-lg h-11 flex items-center justify-center group-data-[collapsible=icon]:w-11 group-data-[collapsible=icon]:px-0"
                tooltip={`${user.name} · ${user.role}`}
              >
                <img
                  src={user.avatarUrl}
                  alt={`Avatar de ${user.name}`}
                  className="size-8 shrink-0 rounded-full bg-muted"
                  style={{ border: '2px solid #c3d2ec' }}
                />
                <div className="min-w-0 flex-1 leading-tight group-data-[collapsible=icon]:hidden">
                  <p className="text-xs font-medium truncate text-sidebar-foreground">{user.name}</p>
                  <p className="text-[11px] text-sidebar-foreground/50 truncate">
                    {user.role}
                  </p>
                </div>
                <ChevronsUpDown
                  size={14}
                  className="ml-auto shrink-0 group-data-[collapsible=icon]:hidden text-sidebar-foreground/40"
                  aria-hidden="true"
                />
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="right"
              align="end"
              sideOffset={8}
              className="w-56"
            >
              <div className="px-3 py-3 border-b border-border">
                <p className="text-sm font-medium truncate text-sidebar-foreground">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>

              <DropdownMenuItem className="transition-colors duration-150 mt-1">
                <User size={14} className="mr-2" />
                Meu Perfil
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10 transition-colors duration-150">
                <LogOut size={14} className="mr-2" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}