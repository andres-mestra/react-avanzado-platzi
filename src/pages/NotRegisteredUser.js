import { useAuthContext } from '../hooks/useAuthContext'

export const NoRegisteredUser = () => {
  const { isAuth, activateAuth } = useAuthContext()

  return (
    <form onSubmit={activateAuth}>
      <button type="submit">Iniciar sesión</button>
    </form>
  )
}
