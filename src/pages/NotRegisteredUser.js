import { useAuthContext } from '../hooks/useAuthContext'
import { UserForm } from '../components/UserForm'
import { registerMutation } from '../mutations/registerMutation'

export const NoRegisteredUser = () => {
  const { isAuth, activateAuth } = useAuthContext()
  const { handleRegister, token, error, loading } = registerMutation()

  const handleSubmit = ({ email, password }) => {
    handleRegister({ email, password }).then(activateAuth)
  }

  const errorMsg = error && 'El usuario ya existe o hay algún problema.'

  return (
    <UserForm
      error={errorMsg}
      disabled={loading}
      onSubmit={handleSubmit}
      title="Registrarse"
    />
  )
}
