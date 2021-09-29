import { useApolloClient } from '@apollo/client'
import { SubmitButton } from '../components/SubmitButton'
import { useAuthContext } from '../hooks/useAuthContext'

export const User = () => {
  const { removeAuth } = useAuthContext()
  const client = useApolloClient()

  const handleRemoveAuth = () => {
    removeAuth()
    client.resetStore()
  }

  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={handleRemoveAuth}>Cerrar sessión</SubmitButton>
    </>
  )
}
