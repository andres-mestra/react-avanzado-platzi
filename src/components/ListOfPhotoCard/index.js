import * as React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotoCard = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5, 6, 7].map((id) => (
        <PhotoCard key={id} id={id} />
      ))}
    </List>
  )
}
