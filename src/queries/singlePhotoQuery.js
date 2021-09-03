import { useQuery, gql } from '@apollo/client'

const getPhoto = gql`
  query getPhoto($id: ID!) {
    photo(id: $id) {
      id
      src
      userId
      likes
      liked
      categoryId
    }
  }
`

export const singlePhotoQuery = (id) => {
  const { loading, data, error } = useQuery(getPhoto, {
    variables: {
      id,
    },
  })

  return {
    loading,
    data,
    error,
  }
}
