import { useAuthContext } from '../hooks/useAuthContext'
import { UserForm } from '../components/UserForm'

export const NoRegisteredUser = () => {
  const { isAuth, activateAuth } = useAuthContext()

  return <UserForm onSubmit={activateAuth} title="Registrarse" />
}
