/**
 * src/types/navigation.ts
 *
 * Tipos e constantes de navegação centralizados.
 *
 * Quando adicionar uma rota nova:
 *  1. Crie a página em src/pages/
 *  2. Adicione a rota no index.tsx (AppRoutes)
 *  3. Adicione o item aqui - a sidebar atualiza automaticamente
 */

import {
  LayoutDashboard,
  Users,
  FileCheck,
  LifeBuoy,
  Settings,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  /** Rota exata — usada para comparar com location.pathname */
  path: string;
  icon: LucideIcon;
  /** Badge numérico opcional. Ideal para pendências, notificações. */
  badge?: number;
  /** Se true, o item não aparece na sidebar (útil para rotas internas) */
  hidden?: boolean;
}

export const mainNav: NavItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Alunos',
    path: '/alunos',
    icon: Users,
  },
  {
    label: 'Validar Horas',
    path: '/validacao',
    icon: FileCheck,
    badge: 3, // TODO: buscar do servidor (quantidade de solicitações pendentes)
  },
];

export const bottomNav: NavItem[] = [
  { label: 'Suporte',       path: '/suporte', icon: LifeBuoy },
  { label: 'Configurações', path: '/config',  icon: Settings },
];