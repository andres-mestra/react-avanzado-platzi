import { useMutation, gql } from '@apollo/client'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const loginMutation = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN)
  const token = data?.login

  const handleLogin = ({ email, password }) => {
    const input = { email, password }
    return login({
      variables: { input },
    })
  }

  return { handleLogin, token, loading, error }
}
