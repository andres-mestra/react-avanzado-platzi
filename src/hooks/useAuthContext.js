import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuthContext = () => {
  const { isAuth, activateAuth } = useContext(AuthContext)

  return { isAuth, activateAuth }
}
