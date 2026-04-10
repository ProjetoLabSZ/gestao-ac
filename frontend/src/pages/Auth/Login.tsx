/**
 * Login.tsx — placeholder visual
 *
 * Garantir que a rota /login existe e renderiza corretamente. O formulário real (React Hook Form + Zod) será implementado futuramente.
 *
 * TODO:
 *  - Formulário de e-mail + senha
 *  - Validação com Zod
 *  - Integração com endpoint POST /auth/login
 *  - Redirect para /dashboard após autenticação
 */

export function Login() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/40">
      <div className="w-full max-w-sm rounded-xl border bg-card p-8 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-bold tracking-tight">AC Manager</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Entre com sua conta
          </p>
        </div>

        {/* Formulário real vem na branch feat/login-page */}
        <div className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
          Formulário de login — em breve
        </div>
      </div>
    </div>
  )
}