import { useAuthContext } from '../hooks/useAuthContext'
import { UserForm } from '../components/UserForm'
import { registerMutation } from '../mutations/registerMutation'

export const NoRegisteredUser = () => {
  const { isAuth, activateAuth } = useAuthContext()
  const { handleRegister, token, error } = registerMutation()
  const handleSubmit = ({ email, password }) => {
    handleRegister({ email, password })
    activateAuth()
  }

  return <UserForm onSubmit={handleSubmit} title="Registrarse" />
}
