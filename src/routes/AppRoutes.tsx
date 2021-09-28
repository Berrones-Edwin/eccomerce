import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import HomeScreen from '../pages/HomeScreen'
import CartScreen from '../pages/CartScreen'
import SingleProductScreen from '../pages/SingleProductScreen'
import ProductsCategorySpecify from '../pages/ProductsCategorySpecifyScreen'

import LoginScreen from '../pages/LoginScreen'
import Error404Screen from '../pages/Error404Screen'
import WishListScreen from '../pages/WishListScreen'
import ProductsScreen from '../pages/ProductsScreen'

import PublicRoute from './PublicRoute'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContextProvider'
import { useUser } from '../hooks/useUser'

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
        <Route path="/products" exact component={ProductsScreen} />
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
        <PrivateRoute
          isAuthenticated={isLoggen}
          path="/wishlist"
          exact
          component={WishListScreen}
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
