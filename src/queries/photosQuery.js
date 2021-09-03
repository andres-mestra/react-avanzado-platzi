import { useQuery, gql } from '@apollo/client'

const withPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      src
      userId
      likes
      liked
      categoryId
    }
  }
`

export const photosQuery = (categoryId) => {
  const { loading, data, error } = useQuery(withPhotos, {
    variables: {
      categoryId,
    },
  })

  return {
    loading,
    data,
    error,
  }
}
