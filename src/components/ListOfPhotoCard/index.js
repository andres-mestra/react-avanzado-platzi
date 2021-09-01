import * as React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotoCard = () => {
  return (
    <List>
      {[1, 2, 3].map((id) => (
        <PhotoCard key={id} />
      ))}
    </List>
  )
}
