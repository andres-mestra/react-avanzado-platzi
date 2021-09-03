import * as React from 'react'
import { useQuery, gql } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      src
      userId
      likes
      liked
      categoryId
    }
  }
`

export const ListOfPhotoCard = () => {
  const { loading, data } = useQuery(withPhotos)

  if (loading) return 'Loading...'

  const photos = data.photos
  return (
    <List>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </List>
  )
}
