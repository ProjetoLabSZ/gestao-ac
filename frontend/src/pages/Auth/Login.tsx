import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [perfil, setPerfil] = useState('coordenador')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!email || !senha) {
      alert('Preencha email e senha.')
      return
    }

    const usuario = {
      email,
      perfil,
    }

    localStorage.setItem('usuarioLogado', JSON.stringify(usuario))

    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/40 p-6">
      <Card className="w-full max-w-md rounded-2xl shadow-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">Horas+</CardTitle>
          <p className="text-sm text-muted-foreground">
            Sistema de Horas Complementares
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Senha</label>
              <Input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Perfil</label>
              <select
                value={perfil}
                onChange={(e) => setPerfil(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <option value="coordenador">Coordenador</option>
                <option value="secretaria">Secretaria</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}