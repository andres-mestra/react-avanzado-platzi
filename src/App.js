import * as React from 'react'
import { Logo } from './components/Logo'
import { SinglePhotoCard } from './components/PhotoCard'
import { Routes } from './routes'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <Logo />
      <GlobalStyle />
      {detailId ? <SinglePhotoCard id={detailId} /> : <Routes />}
    </>
  )
}
