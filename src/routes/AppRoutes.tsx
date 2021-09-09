import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomeScreen from '../pages/HomeScreen'
import CartScreen from '../pages/CartScreen'
import SingleProductScreen from '../pages/SingleProductScreen'
import ProductsCategorySpecify from '../pages/ProductsCategorySpecifyScreen'
import Navbar from '../components/Navbar'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'
import Error404Screen from '../pages/Error404Screen'
import { useUser } from '../hooks/useUser'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import { UserContext } from '../context/UserContextProvider'

const AppRoutes = () => {
  const { isLoggen } = useUser()
  const { setUserToken } = useContext(UserContext)

  useEffect(() => {
    setUserToken(localStorage.getItem('token') || '')
  }, [])
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/products" exact component={HomeScreen} />
        <Route path="/products/:id" exact component={SingleProductScreen} />
        <Route
          path="/products/category/:name"
          exact
          component={ProductsCategorySpecify}
        />
        <PrivateRoute
          isAuthenticated={isLoggen}
          path="/cart"
          exact
          component={CartScreen}
        />
        <PublicRoute
          isAuthenticated={isLoggen}
          path="/login"
          exact
          component={LoginScreen}
        />
        <Route path="**" component={Error404Screen} />
      </Switch>
    </Router>
  )
}

export default AppRoutes
