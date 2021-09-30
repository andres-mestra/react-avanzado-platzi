import { useApolloClient } from '@apollo/client'
import { HelmetMeta } from '../components/HelmetMeta'
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
      <HelmetMeta
        title="Petgram - Adminstra y configura tu cuenta"
        description="Ajusta Petgram con tus preferencias"
      />
      <h1>User</h1>
      <SubmitButton onClick={handleRemoveAuth}>Cerrar sessión</SubmitButton>
    </>
  )
}
