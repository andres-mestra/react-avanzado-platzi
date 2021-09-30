import { Redirect, Router } from '@reach/router'
import { useAuthContext } from '../hooks/useAuthContext'
import { NotFound } from '../pages/NotFound'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { NavBar } from '../components/NavBar'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { NoRegisteredUser } from '../pages/NotRegisteredUser'

export const Routes = () => {
  const { isAuth } = useAuthContext()

  return (
    <>
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:id" />
        {!isAuth && <NoRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </>
  )
}
