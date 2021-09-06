import { useMutation, gql } from '@apollo/client'

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      src
      likes
      liked
    }
  }
`

export const toggleLikeMutation = () => {
  const [likeAnonymousPhoto, { data, loading, error }] = useMutation(LIKE_PHOTO)

  const updateCache = (cache, result, id) => {
    cache.writeQuery({
      query: gql`
        query WritePhoto($id: Int!) {
          photo(id: $id) {
            likes
          }
        }
      `,
      data: {
        photo: {
          __typename: 'Photo',
          id: id,
          likes: result.likes,
        },
      },
      variables: {
        id: id,
      },
    })
  }

  const toggleLike = (id) => {
    likeAnonymousPhoto({
      variables: {
        input: { id },
      },
      update: (cache, { data: { likeAnonymousPhoto } }) =>
        updateCache(cache, likeAnonymousPhoto, id),
    })
  }

  return {
    toggleLike,
    data,
    loading,
    error,
  }
}
