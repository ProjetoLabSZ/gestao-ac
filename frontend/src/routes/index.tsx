import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'

// Auth
import { Login } from '@/pages/Auth/Login'

// Shared (role-aware)
import { Dashboard } from '@/pages/Shared/Dashboard'
import { Config } from '@/pages/Shared/Config'
import { Suporte } from '@/pages/Shared/Suporte'
import { Processos } from '@/pages/Shared/Processos'
import { Profile } from '@/pages/Shared/Profile'
import { Settings } from '@/pages/Shared/Settings'

// Admin
import { Usuarios } from '@/pages/Admin/Usuarios'
import { Estrutura } from '@/pages/Admin/Estrutura'
import { Regulamentos } from '@/pages/Admin/Regulamentos'
import { Auditoria } from '@/pages/Admin/Auditoria'

// Secretaria
import { NovoProtocolo } from '@/pages/Secretaria/NovoProtocolo'
import { Alunos } from '@/pages/Secretaria/Alunos'
import { Documentos } from '@/pages/Secretaria/Documentos'

// Coordenador
import { Integralizacao } from '@/pages/Coordenador/Integralizacao'
import { Equivalencia } from '@/pages/Coordenador/Equivalencia'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/login" element={<Login />} />

        {/* Rotas protegidas com Layout de Sidebar */}
        <Route element={<AppLayout />}>
          {/* Páginas compartilhadas */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/config" element={<Config />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/processos" element={<Processos />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />

          {/* Páginas do Admin */}
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/estrutura" element={<Estrutura />} />
          <Route path="/regulamentos" element={<Regulamentos />} />
          <Route path="/auditoria" element={<Auditoria />} />

          {/* Páginas da Secretaria */}
          <Route path="/novo-protocolo" element={<NovoProtocolo />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/documentos" element={<Documentos />} />

          {/* Páginas do Coordenador */}
          <Route path="/integralizacao" element={<Integralizacao />} />
          <Route path="/equivalencia" element={<Equivalencia />} />
        </Route>

        {/* Fallback */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}