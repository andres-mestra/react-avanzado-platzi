import { useAuthContext } from '../hooks/useAuthContext'
import { UserForm } from '../components/UserForm'
import { registerMutation } from '../mutations/registerMutation'
import { loginMutation } from '../mutations/loginMutation'

export const NoRegisteredUser = () => {
  const { activateAuth } = useAuthContext()
  const {
    handleRegister,
    error: errorRegister,
    loading: loadingRegister,
  } = registerMutation()

  const {
    handleLogin,
    error: errorLogin,
    loading: loadingLogin,
  } = loginMutation()

  const handleSubmitRegister = ({ email, password }) => {
    handleRegister({ email, password }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  const handleSubmitLogin = ({ email, password }) => {
    handleLogin({ email, password }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
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
