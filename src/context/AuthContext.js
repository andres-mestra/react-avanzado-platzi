import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
    },
  }

  return (
    <AuthContext.Provider value={{ ...value }}>{children}</AuthContext.Provider>
  )
}
