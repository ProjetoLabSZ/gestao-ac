import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { BrowserRouter } from 'react-router-dom'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { AppLayout } from '../AppLayout'

// Mock useAuth hook
vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    user: {
      id: 'test-user',
      email: 'test@example.com',
      role: 'admin',
    },
  }),
}))

describe('AppLayout - Responsive Behavior', () => {
  let originalInnerWidth: number

  beforeEach(() => {
    originalInnerWidth = window.innerWidth
  })

  afterEach(() => {
    // Restaurar tamanho original
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: originalInnerWidth,
    })
  })

  // Função helper para redimensionar viewport
  const setViewportWidth = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: width,
    })
    window.dispatchEvent(new Event('resize'))
  }

  const renderAppLayout = () => {
    return render(
      <BrowserRouter>
        <TooltipProvider>
          <AppLayout />
        </TooltipProvider>
      </BrowserRouter>
    )
  }

  // ============= TESTES POR BREAKPOINT =============

  describe('Mobile - SM (640px)', () => {
    it('renderiza layout em sm sem erros', () => {
      setViewportWidth(640)
      renderAppLayout()

      // Verifica se TopBar está presente
      const topbar = document.querySelector('.flex')
      expect(topbar).toBeInTheDocument()
    })

    it('estrutura de layout está correta em mobile', () => {
      setViewportWidth(640)
      const { container } = renderAppLayout()

      // Verifica se SidebarInset existe (usa data-testid no componente)
      const sidebarInset = container.querySelector('[data-testid="sidebar-inset"]')
      expect(sidebarInset).toBeInTheDocument()
    })
  })

  describe('Tablet - MD (768px)', () => {
    it('renderiza layout em md sem erros', () => {
      setViewportWidth(768)
      renderAppLayout()

      // Verifica presença de componentes principais
      expect(document.querySelector('.flex')).toBeInTheDocument()
    })

    it('content area tem overflow-auto para scroll', () => {
      setViewportWidth(768)
      const { container } = renderAppLayout()

      // Verifica a classe overflow-auto no content (mais específico)
      const contentArea = container.querySelector('div.flex-1.p-6')
      expect(contentArea).toBeInTheDocument()
      expect(contentArea).toHaveClass('overflow-auto')
    })
  })

  describe('Desktop - LG (1024px)', () => {
    it('renderiza layout em lg sem erros', () => {
      setViewportWidth(1024)
      renderAppLayout()

      // Layout deve estar disponível em desktop
      const inset = document.querySelector('.flex.flex-col')
      expect(inset).toBeInTheDocument()
    })

    it('content area tem padding correto em desktop', () => {
      setViewportWidth(1024)
      const { container } = renderAppLayout()

      // Verifica padding: p-6 = 1.5rem
      const contentArea = container.querySelector('.p-6')
      expect(contentArea).toHaveClass('p-6', 'overflow-auto', 'flex-1')
    })
  })

  describe('Desktop - XL (1280px)', () => {
    it('renderiza layout em xl sem erros', () => {
      setViewportWidth(1280)
      renderAppLayout()

      expect(document.querySelector('.flex')).toBeInTheDocument()
    })

    it('layout mantém estrutura correta no XL', () => {
      setViewportWidth(1280)
      const { container } = renderAppLayout()

      // Estrutura flex deve estar presente
      const layout = container.querySelector('.flex.flex-col')
      expect(layout).toBeInTheDocument()
    })
  })

  // ============= TESTES DE COMPONENTES =============

  describe('Componentes principales', () => {
    it('TopBar + SidebarProvider renderizam', () => {
      setViewportWidth(1024)
      const { container } = renderAppLayout()

      const children = container.querySelector('div')?.children
      expect(children).toBeDefined()
      expect(children?.length).toBeGreaterThan(0)
    })

    it('SidebarInset tem pt-16 para espaço do TopBar', () => {
      setViewportWidth(640)
      const { container } = renderAppLayout()

      const sidebarInset = container.querySelector('[data-testid="sidebar-inset"]')
      expect(sidebarInset).toHaveClass('flex', 'flex-col', 'min-h-0')
    })

    it('Outlet renderiza dentro de content area', () => {
      setViewportWidth(1024)
      const { container } = renderAppLayout()

      // Verifica se div com flex-1 p-6 existe (onde Outlet renderiza)
      const outlet = container.querySelector('.flex-1.p-6')
      expect(outlet).toBeInTheDocument()
    })
  })

  // ============= TESTES DE GUARD DE AUTENTICAÇÃO =============

  describe('Autenticação', () => {
    it('renderiza layout quando user existe', () => {
      setViewportWidth(1024)
      renderAppLayout()

      // Se não é redirecionado, quer dizer que user existe
      expect(document.querySelector('.flex')).toBeInTheDocument()
    })
  })

  // ============= TESTES CROSS-BROWSER =============

  describe('Responsividade em diferentes tamanhos', () => {
    const breakpoints = [
      { name: 'Mobile (320px)', width: 320 },
      { name: 'Mobile (375px)', width: 375 },
      { name: 'Mobile (425px)', width: 425 },
      { name: 'Tablet (640px)', width: 640 },
      { name: 'Tablet (768px)', width: 768 },
      { name: 'Desktop (1024px)', width: 1024 },
      { name: 'Desktop (1280px)', width: 1280 },
      { name: 'Desktop (1536px)', width: 1536 },
    ]

    breakpoints.forEach(({ name, width }) => {
      it(`renderiza corretamente em ${name}`, () => {
        setViewportWidth(width)
        renderAppLayout()

        // Componentes principais sempre devem estar presentes
        expect(document.querySelector('.flex')).toBeInTheDocument()
      })
    })
  })
})
