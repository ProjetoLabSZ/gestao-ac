/**
 * TopBar.tsx
 *
 * Barra fixa superior com logo, busca e perfil do usuário.
 */

import { GraduationCap } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { SearchBar } from './SearchBar'
import { ProfileDropdown } from './ProfileDropdown'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function TopBar() {
  const { user, avatarUrl } = useAuth()

  return (
    <div className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="flex items-center justify-between h-16 px-4 gap-4">
        {/* Logo com nome do sistema */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary shadow-sm">
            <GraduationCap size={20} className="text-sidebar-primary-foreground" aria-hidden="true" />
          </div>
          <span className="hidden sm:inline text-sm font-semibold text-foreground">
            Gestão AC
          </span>
        </div>

        {/* Busca (flex-1 para ocupar espaço disponível) */}
        <div className="flex-1 max-w-md">
          <SearchBar />
        </div>

        {/* Perfil do usuário com dropdown */}
        <div className="flex-shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-2 h-10 px-3 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 outline-ring"
                aria-label={`Menu do usuário: ${user.name}`}
                title={`${user.name} · ${user.role}`}
              >
                <img
                  src={avatarUrl}
                  alt={user.name}
                  className="avatar-sm avatar-border cursor-pointer"
                />
              </button>
            </DropdownMenuTrigger>

            <ProfileDropdown user={user} avatarUrl={avatarUrl} />
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
