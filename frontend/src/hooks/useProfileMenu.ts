import { useNavigate } from 'react-router-dom'

export function useProfileMenu() {
  const navigate = useNavigate()

  const handleProfile = () => {
    navigate('/profile')
  }

  const handleSettings = () => {
    navigate('/settings')
  }

  const handleLogout = () => {
    // TODO: Integrar com backend para limpar sessão
    // TODO: localStorage.removeItem('authToken')
    navigate('/login', { replace: true })
  }

  return {
    handleProfile,
    handleSettings,
    handleLogout,
  }
}