import { useMutation, gql } from '@apollo/client'

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      src
      likes
      liked
    }
  }
`

export const toggleLikeMutation = () => {
  const [likePhoto, { data, loading, error }] = useMutation(LIKE_PHOTO)

  const updateCache = (cache, result, id) => {
    const { likes, liked } = result

    cache.writeQuery({
      query: gql`
        query WritePhoto($id: Int!) {
          photo(id: $id) {
            likes
            liked
          }
        }
      `,
      data: {
        photo: {
          __typename: 'Photo',
          id,
          likes,
          liked,
        },
      },
      variables: {
        id: id,
      },
    })
  }

  const toggleLike = (id) => {
    likePhoto({
      variables: {
        input: { id },
      },
      update: (cache, { data: { likePhoto } }) =>
        updateCache(cache, likePhoto, id),
    })
  }

  return {
    toggleLike,
    data,
    loading,
    error,
  }
}
