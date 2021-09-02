import * as React from 'react'
import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Category } from '../Category'
import { Item, List } from './styles'

export const ListOfCategories = () => {
  const {
    data: categories,
    loading,
    error,
  } = useFetch('https://petgram-server-mestra.vercel.app/categories')

  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories?.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )

  if (loading) return <p>loadin...</p>
  if (error) return <p>!Error!</p>

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
