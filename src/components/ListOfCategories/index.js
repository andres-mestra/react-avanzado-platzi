import * as React from 'react'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Category } from '../Category'
import { Item, List } from './styles'

export const ListOfCategories = () => {
  const {
    data: categories,
    loading,
    error,
  } = useFetch('https://petgram-server-mestra.vercel.app/categories')

  if (loading) return <p>loadin...</p>
  if (error) return <p>!Error!</p>

  return (
    <List>
      {categories?.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
