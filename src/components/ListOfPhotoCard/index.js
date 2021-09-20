import { photosQuery } from '../../queries/photosQuery'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotoCard = ({ categoryId }) => {
  const { loading, data } = photosQuery(categoryId)

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
