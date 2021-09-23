import { useMutation, gql } from '@apollo/client'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

export const registerMutation = () => {
  const [signup, { data, loading, error }] = useMutation(REGISTER)
  const token = data?.signup

  const handleRegister = ({ email, password }) => {
    const input = { email, password }
    return signup({
      variables: { input },
    })
  }

  return { handleRegister, token, loading, error }
}
