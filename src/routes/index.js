import { lazy, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { useAuthContext } from '../hooks/useAuthContext'
import { NavBar } from '../components/NavBar'

const NotFound = lazy(() => import('../pages/NotFound'))
const Home = lazy(() => import('../pages/Home'))
const Detail = lazy(() => import('../pages/Detail'))
const NoRegisteredUser = lazy(() => import('../pages/NotRegisteredUser'))
const User = lazy(() => import('../pages/User'))
const Favs = lazy(() => import('../pages/Favs'))

export const Routes = () => {
  const { isAuth } = useAuthContext()

  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}
