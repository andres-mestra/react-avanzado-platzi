import * as React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCard />
  </>
)
