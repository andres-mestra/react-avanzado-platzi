import * as React from 'react'
import { Category } from '../Category'
import db from '../../../api/db.json'
import { Item, List } from './styles'

export const ListOfCategories = () => {
  return (
    <List>
      {db.categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
