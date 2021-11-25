import React, { useContext, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContextProvider'
import { useUser } from '../hooks/useUser'
import ShippingDetails from '../pages/ShippingDetails'
import ProfileScreen from '../pages/ProfileScreen'

const HomeScreen = lazy(() => import('../pages/HomeScreen'))
const SingleProductScreen = lazy(() => import('../pages/SingleProductScreen'))
const ProductsCategorySpecify = lazy(
  () => import('../pages/ProductsCategorySpecifyScreen')
)
const LoginScreen = lazy(() => import('../pages/LoginScreen'))
const Error404Screen = lazy(() => import('../pages/Error404Screen'))
const WishListScreen = lazy(() => import('../pages/WishListScreen'))
const ProductsScreen = lazy(() => import('../pages/ProductsScreen'))
const SettingsScreen = lazy(() => import('../pages/SettingsScreen'))

const AppRoutes = () => {
  const { isLoggen } = useUser()
  const { setUserToken } = useContext(UserContext)

  useEffect(() => {
    setUserToken(localStorage.getItem('token') || '')
  }, [])
  return (
    <Router>
      <Navbar />
      <Suspense fallback={'...loading'}>
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
            path="/wishlist"
            exact
            component={WishListScreen}
          />
          <PrivateRoute
            isAuthenticated={isLoggen}
            path="/settings"
            component={SettingsScreen}
          />
          <PublicRoute
            isAuthenticated={isLoggen}
            path="/login"
            exact
            component={LoginScreen}
          />
          <Route path="**" component={Error404Screen} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
