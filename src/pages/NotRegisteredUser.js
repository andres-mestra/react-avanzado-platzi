import { useAuthContext } from '../hooks/useAuthContext'
import { UserForm } from '../components/UserForm'
import { registerMutation } from '../mutations/registerMutation'
import { loginMutation } from '../mutations/loginMutation'

export const NoRegisteredUser = () => {
  const { isAuth, activateAuth } = useAuthContext()
  const {
    handleRegister,
    token: tokenRegister,
    error: errorRegister,
    loading: loadingRegister,
  } = registerMutation()

  const {
    handleLogin,
    token: tokenLogin,
    error: errorLogin,
    loading: loadingLogin,
  } = loginMutation()

  const handleSubmitRegister = ({ email, password }) => {
    handleRegister({ email, password }).then(activateAuth)
  }

  const handleSubmitLogin = ({ email, password }) => {
    handleLogin({ email, password }).then(activateAuth)
  }

  const errorMsgRegister =
    errorRegister && 'El usuario ya existe o hay algún problema.'
  const errorMsgLogin = errorLogin && 'Email o password invalido.'

  return (
    <>
      <UserForm
        error={errorMsgRegister}
        disabled={loadingRegister}
        onSubmit={handleSubmitRegister}
        title="Registrarse"
      />
      <UserForm
        error={errorMsgLogin}
        disabled={loadingLogin}
        onSubmit={handleSubmitLogin}
        title="Iniciar sesión"
      />
    </>
  )
}
