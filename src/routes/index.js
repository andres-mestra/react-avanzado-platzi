import { Router } from '@reach/router'
import { useAuthContext } from '../hooks/useAuthContext'
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
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:id" />
      </Router>
      {isAuth ? (
        <Router>
          <Favs path="/favs" />
          <User path="/user" />
        </Router>
      ) : (
        <Router>
          <NoRegisteredUser path="/favs" />
          <NoRegisteredUser path="/user" />
        </Router>
      )}
      <NavBar />
    </>
  )
}
