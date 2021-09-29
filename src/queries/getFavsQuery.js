import { gql, useQuery } from '@apollo/client'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const getFavsQuery = () => {
  const { loading, data, error } = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network',
  })

  return { loading, data, error }
}
