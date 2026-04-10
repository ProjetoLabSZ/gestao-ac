// src/components/errors/ErrorBoundary.tsx
import React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error) {
    console.error('ErrorBoundary caught error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-destructive/10">
          <div className="bg-card p-6 rounded-lg border border-destructive max-w-sm">
            <h1 className="text-xl font-bold text-destructive">Oops! Erro</h1>
            <p className="text-sm text-muted-foreground mt-2">
              {this.state.error?.message || 'Algo deu errado'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium"
            >
              Recarregar
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}