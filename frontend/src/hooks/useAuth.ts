/**
 * src/hooks/useAuth.ts
 *
 * Hook de autenticação — stub para desenvolvimento local.
 *
 * Substituir este stub pelo contexto real quando o backend de auth estiver pronto.
 *
 * Para testar roles diferentes, alterar DEFAULT_ROLE abaixo.
 */

import { type UserRole } from '@/types/navigation'

export interface AuthUser {
  id: string
  name: string
  email: string
  role: UserRole
  avatarUrl?: string
}

type UsuarioLogado = {
  email: string
  perfil: string
}

// Usuários base
const STUB_USERS: Record<UserRole, AuthUser> = {
  admin: {
    id: '1',
    name: 'Admin SENAI',
    email: 'admin@senai.br',
    role: 'admin',
  },
  secretaria: {
    id: '2',
    name: 'Secretaria SENAI',
    email: 'secretaria@senai.br',
    role: 'secretaria',
  },
  coordenador: {
    id: '3',
    name: 'Coordenador SENAI',
    email: 'coordenador@senai.br',
    role: 'coordenador',
  },
}

// role do localStorage
function getRoleFromStorage(): UserRole {
  const raw = localStorage.getItem('usuarioLogado')

  if (!raw) return 'coordenador'

  try {
    const usuario: UsuarioLogado = JSON.parse(raw)

    if (
      usuario.perfil === 'admin' ||
      usuario.perfil === 'secretaria' ||
      usuario.perfil === 'coordenador'
    ) {
      return usuario.perfil
    }

    return 'coordenador'
  } catch {
    return 'coordenador'
  }
}

export function useAuth() {
  const role = getRoleFromStorage()
  const stored = localStorage.getItem('usuarioLogado')

  let userData: AuthUser = STUB_USERS[role]

  if (stored) {
    try {
      const usuario: UsuarioLogado = JSON.parse(stored)

      userData = {
        ...STUB_USERS[role],
        email: usuario.email || STUB_USERS[role].email,
      }
    } catch {
      userData = STUB_USERS[role]
    }
  }

  // avatar
  const avatarUrl =
    userData.avatarUrl ??
    `https://api.dicebear.com/8.x/avataaars/svg?seed=${encodeURIComponent(userData.name)}`

  return {
    user: userData,
    role,
    avatarUrl,
    isAuthenticated: !!stored,
  }
}
