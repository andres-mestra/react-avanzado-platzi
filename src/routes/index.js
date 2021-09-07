import * as React from 'react'
import { Router } from '@reach/router'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { NavBar } from '../components/NavBar'

export const Routes = () => {
  return (
    <>
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:id" />
      </Router>
      <NavBar />
    </>
  )
}
