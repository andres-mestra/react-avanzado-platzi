import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuthContext = () => {
  const { isAuth, activateAuth, removeAuth } = useContext(AuthContext)

  return { isAuth, activateAuth, removeAuth }
}
