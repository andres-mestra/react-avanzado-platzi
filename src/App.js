import * as React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'
import { SinglePhotoCard } from './components/PhotoCard'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <>
      <Logo />
      <GlobalStyle />
      {detailId ? (
        <SinglePhotoCard id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCard />
        </>
      )}
    </>
  )
}
