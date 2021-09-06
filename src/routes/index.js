import * as React from 'react'
import { Router } from '@reach/router'
import { Home } from '../pages/Home'

export const Routes = () => {
  return (
    <Router>
      <Home path="/" />
      <Home path="/pet/:id" />
    </Router>
  )
}
