/**
 * SearchBar.tsx
 *
 * Input de busca simples para a barra superior.
 * Filtra navegação em tempo real com Cmd+K para focar.
 */

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { navConfig } from '@/types/navigation'
import { useAuth } from '@/hooks/useAuth'
import type { NavItem } from '@/types/navigation'

interface SearchResult extends NavItem {
  group: 'main' | 'bottom'
}

export function SearchBar() {
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const { user } = useAuth()

  const { main, bottom } = navConfig[user.role]

  const allItems: SearchResult[] = [
    ...main.map(item => ({ ...item, group: 'main' as const })),
    ...bottom.map(item => ({ ...item, group: 'bottom' as const }))
  ]

  const results = search.trim()
    ? allItems.filter(item =>
        !item.hidden &&
        (item.label.toLowerCase().includes(search.toLowerCase()) ||
          item.description?.toLowerCase().includes(search.toLowerCase()))
      )
    : []

  // Ctrl+K para focar no input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
        setSearch('')
        setSelectedIndex(0)
      }

      // ESC para fechar dropdown
      if (e.key === 'Escape') {
        setIsOpen(false)
      }

      // Navegação com setas quando dropdown aberto
      if (isOpen && results.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedIndex(prev => (prev + 1) % results.length)
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedIndex(prev => (prev - 1 + results.length) % results.length)
        } else if (e.key === 'Enter') {
          e.preventDefault()
          handleSelect(results[selectedIndex])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex])

  const handleSelect = (item: SearchResult) => {
    navigate(item.path)
    setSearch('')
    setIsOpen(false)
    setSelectedIndex(0)
  }

  useEffect(() => {
    setSelectedIndex(0)
  }, [search])

  return (
    <div className="relative w-full max-w-md">
      {/* Input */}
      <div className="relative flex items-center">
        <Search className="absolute left-3 size-4 text-muted-foreground pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Pesquisar... (Ctrl+K)"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => search && setIsOpen(true)}
          className="w-full pl-9 pr-9 py-2 border border-border bg-background rounded-lg text-sm outline-none placeholder:text-muted-foreground transition-all focus-visible:ring-2 focus-visible:ring-sidebar-primary/50"
        />
        {search && (
          <button
            onClick={() => {
              setSearch('')
              setIsOpen(false)
            }}
            className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Limpar busca"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Dropdown de resultados */}
      {isOpen && search && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-40">
          <div className="max-h-64 overflow-y-auto">
            {/* Menu */}
            {results.filter(r => r.group === 'main').length > 0 && (
              <div>
                <div className="px-3 py-2 bg-muted/50 text-xs font-normal uppercase tracking-wider text-muted-foreground">
                  Menu
                </div>
                {results
                  .filter(r => r.group === 'main')
                  .map((item) => {
                    const idx = results.indexOf(item)
                    const Icon = item.icon

                    return (
                      <button
                        key={item.path}
                        onClick={() => handleSelect(item)}
                        className={`w-full text-left px-3 py-2 flex items-center gap-2 transition-colors ${
                          selectedIndex === idx
                            ? 'bg-sidebar-primary/10 text-sidebar-primary'
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Icon size={16} className="flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm truncate font-medium">{item.label}</p>
                          {item.description && (
                            <p className="text-xs text-muted-foreground truncate">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </button>
                    )
                  })}
              </div>
            )}

            {/* Configurações */}
            {results.filter(r => r.group === 'bottom').length > 0 && (
              <div>
                <div className="px-3 py-2 bg-muted/50 text-xs font-normal uppercase tracking-wider text-muted-foreground border-t border-border">
                  Configurações
                </div>
                {results
                  .filter(r => r.group === 'bottom')
                  .map((item) => {
                    const idx = results.indexOf(item)
                    const Icon = item.icon

                    return (
                      <button
                        key={item.path}
                        onClick={() => handleSelect(item)}
                        className={`w-full text-left px-3 py-2 flex items-center gap-2 transition-colors ${
                          selectedIndex === idx
                            ? 'bg-sidebar-primary/10 text-sidebar-primary'
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Icon size={16} className="flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm truncate font-medium">{item.label}</p>
                          {item.description && (
                            <p className="text-xs text-muted-foreground truncate">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </button>
                    )
                  })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overlay para fechar */}
      {isOpen && search && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
