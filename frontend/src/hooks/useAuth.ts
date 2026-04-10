/**
 * src/hooks/useAuth.ts
 *
 * Hook de autenticação — stub para desenvolvimento local.
 *
 * Substituir este stub pelo contexto real quando o backend de auth estiver pronto.
 *
 * Para testar roles diferentes, alterar DEFAULT_ROLE abaixo.
 */

import { type UserRole } from '@/types/navigation';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  /** URL do avatar. Deixe undefined para usar o avatar gerado (dicebear). */
  avatarUrl?: string;
}

const DEFAULT_ROLE: UserRole = 'coordenador';

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
};

// Hook 
export function useAuth() {
  const user = STUB_USERS[DEFAULT_ROLE];

  // Avatar gerado pelo Dicebear se não houver URL real
  const avatarUrl =
    user.avatarUrl ??
    `https://api.dicebear.com/8.x/avataaars/svg?seed=${encodeURIComponent(user.name)}`;

  return { user, avatarUrl };
}
