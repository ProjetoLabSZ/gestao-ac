/**
 * src/types/navigation.ts
 *
 * Tipos e constantes de navegação centralizados com suporte a roles.
 *
 * Quando adicionar uma rota nova:
 *  1. Crie a página em src/pages/
 *  2. Adicione a rota no routes/index.tsx (AppRoutes)
 *  3. Adicione o item no navConfig do(s) role(s) correspondente(s)
 *
 * A sidebar (AppSidebar) lê navConfig[role] — zero duplicação de JSX.
 */

import {
  LayoutDashboard,
  UserCog,
  Building2,
  ScrollText,
  ShieldCheck,
  FilePlus,
  Users,
  FileSearch,
  FolderOpen,
  Inbox,
  FolderKanban,
  GraduationCap,
  BookOpen,
  LifeBuoy,
  Settings,
  type LucideIcon,
} from 'lucide-react';

// Roles do sistema
export type UserRole = 'admin' | 'secretaria' | 'coordenador';

// Tipo base de item de navegação
export interface NavItem {
  label: string;
  /** Rota exata — usada para comparar com location.pathname */
  path: string;
  icon: LucideIcon;
  /** Texto de apoio exibido no tooltip quando a sidebar está colapsada */
  description?: string;
  /** Badge numérico opcional (pendências, notificações). 0 = sem badge. */
  badge?: number;
  /** Se true, o item não aparece na sidebar (útil para rotas internas) */
  hidden?: boolean;
}

// Estrutura de configuração por role 
interface RoleNavConfig {
  main: NavItem[];
  bottom: NavItem[];
}

// Mapa de navegação por role
//
// Admin      - Configuração e segurança
// Secretaria  - Operacional e entrada de dados
// Coordenador - Tomada de decisão e relatórios

export const navConfig: Record<UserRole, RoleNavConfig> = {

  admin: {
    main: [
      {
        label: 'Dashboard',
        path: '/dashboard',
        icon: LayoutDashboard,
        description: 'Visão macro: total de usuários e saúde da API',
      },
      {
        label: 'Usuários do Sistema',
        path: '/usuarios',
        icon: UserCog,
        description: 'Cadastrar e gerenciar Secretarias e Coordenadores',
      },
      {
        label: 'Estrutura Acadêmica',
        path: '/estrutura',
        icon: Building2,
        description: 'Cadastro de Unidades e Cursos',
      },
      {
        label: 'Regulamentos',
        path: '/regulamentos',
        icon: ScrollText,
        description: 'Configurar limites do Anexo A (ex: 40h para monitoria)',
      },
      {
        label: 'Logs de Auditoria',
        path: '/auditoria',
        icon: ShieldCheck,
        description: 'Rastro de segurança das ações no sistema',
      },
    ],
    bottom: [
      { label: 'Configurações', path: '/config', icon: Settings, description: 'Preferências do sistema' },
    ],
  },

  secretaria: {
    main: [
      {
        label: 'Painel',
        path: '/dashboard',
        icon: LayoutDashboard,
        description: 'Solicitações de hoje e status das pendentes',
      },
      {
        label: 'Novo Protocolo',
        path: '/novo-protocolo',
        icon: FilePlus,
        description: 'Registrar PDF de requerimento recebido por e-mail',
      },
      {
        label: 'Base de Alunos',
        path: '/alunos',
        icon: Users,
        description: 'Gestão de matrículas e turmas',
      },
      {
        label: 'Consulta de Processos',
        path: '/processos',
        icon: FileSearch,
        description: 'Verificar se o Coordenador assinou para lançar no SIGE',
        badge: 0, // TODO: buscar do servidor (processos aguardando retorno)
      },
      {
        label: 'Central de Documentos',
        path: '/documentos',
        icon: FolderOpen,
        description: 'Baixar formulários oficiais (Anexo C) para enviar ao aluno',
      },
    ],
    bottom: [
      { label: 'Suporte',       path: '/suporte', icon: LifeBuoy,  description: 'Abrir chamado de suporte' },
      { label: 'Configurações', path: '/config',  icon: Settings,  description: 'Preferências da conta' },
    ],
  },

  coordenador: {
    main: [
      {
        label: 'Fila de Análise',
        path: '/dashboard',
        icon: Inbox,
        description: 'Cards com processos recém-chegados da Secretaria',
        badge: 0, // TODO: buscar do servidor (processos aguardando parecer)
      },
      {
        label: 'Gestão de Processos',
        path: '/processos',
        icon: FolderKanban,
        description: 'Filtrar por: Aguardando Parecer · Em Análise · Finalizados',
      },
      {
        label: 'Integralização (SIGE)',
        path: '/integralizacao',
        icon: GraduationCap,
        description: 'Turmas com 100% das horas — gerar relatório para o SIGE',
      },
      {
        label: 'Guia de Equivalência',
        path: '/equivalencia',
        icon: BookOpen,
        description: 'Consulta das regras do Anexo A (somente leitura)',
      },
    ],
    bottom: [
      { label: 'Suporte',       path: '/suporte', icon: LifeBuoy,  description: 'Abrir chamado de suporte' },
      { label: 'Configurações', path: '/config',  icon: Settings,  description: 'Preferências da conta' },
    ],
  },
};