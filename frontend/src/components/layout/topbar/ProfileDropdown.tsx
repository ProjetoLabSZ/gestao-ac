/**
 * ProfileDropdown.tsx
 *
 * Menu dropdown do perfil do usuário com opções de perfil, preferências e logout.
 */

import { User, Settings, LogOut } from 'lucide-react'
import { useProfileMenu } from '@/hooks/useProfileMenu'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

interface ProfileDropdownProps {
  user: {
    name: string
    email: string
    role: string
  }
  avatarUrl: string
}

export function ProfileDropdown({ user, avatarUrl }: ProfileDropdownProps) {
  const { handleProfile, handleSettings, handleLogout } = useProfileMenu()

  return (
    <DropdownMenuContent align="end" className="w-56">
      {/* Avatar + Info no header do dropdown */}
      <div className="flex items-center gap-3 py-2 px-3 border-b border-sidebar-border/50">
        <img
          src={avatarUrl}
          alt={user.name}
          className="avatar-md avatar-border"
        />
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-medium text-foreground truncate">{user.name}</span>
          <span className="text-xs text-muted-foreground truncate">{user.email}</span>
        </div>
      </div>

      <DropdownMenuSeparator />

      <DropdownMenuItem onClick={handleProfile}>
        <User className="mr-2 size-4" />
        <span>Perfil</span>
      </DropdownMenuItem>

      <DropdownMenuItem onClick={handleSettings}>
        <Settings className="mr-2 size-4" />
        <span>Preferências</span>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem onClick={handleLogout} variant="destructive">
        <LogOut className="mr-2 size-4" />
        <span>Sair</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}
