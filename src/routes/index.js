import * as React from 'react'
import { Router } from '@reach/router'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { NavBar } from '../components/NavBar'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { NoRegisteredUser } from '../pages/NotRegisteredUser'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const Routes = () => {
  return (
    <>
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:id" />
      </Router>
      <UserLogged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NoRegisteredUser path="/favs" />
              <NoRegisteredUser path="/user" />
            </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </>
  )
}
