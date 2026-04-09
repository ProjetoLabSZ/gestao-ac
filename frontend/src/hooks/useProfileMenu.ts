import { useNavigate } from 'react-router-dom'

export function useProfileMenu() {
  const navigate = useNavigate()

  const handleProfile = () => {
    // TODO: Navegar para página de perfil do usuário
    console.log('Navigate to profile page')
    navigate('/profile')
  }

  const handleSettings = () => {
    // TODO: Navegar para página de preferências/configurações
    console.log('Navigate to settings page')
    navigate('/settings')
  }

  const handleLogout = () => {
    // TODO: Limpar auth token, redirecionar para login
    console.log('Logout and clear session')
    // localStorage.removeItem('authToken')
    navigate('/login', { replace: true })
  }

  return {
    handleProfile,
    handleSettings,
    handleLogout,
  }
}