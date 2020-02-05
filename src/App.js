import React, { useContext, Suspense } from 'react'
// import { Category } from "./components/Category/index";
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo/'
import { Home } from './pages/Home'
import { Detail } from './pages/Details'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

import { Router, Redirect } from '@reach/router'
import { NavBar } from './components/NavBar'

import { Context } from './Context'
// const UserLogged = ({ children }) => children({ isAuth:true })

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
