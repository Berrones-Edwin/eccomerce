import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomeScreen from '../pages/HomeScreen'
import CartScreen from '../pages/CartScreen'
import SingleProductScreen from '../pages/SingleProductScreen'
import ProductsCategorySpecify from '../pages/ProductsCategorySpecifyScreen'
import Navbar from '../components/Navbar'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'
import Error404Screen from '../pages/Error404Screen'

import ProductsContextProvider from '../context/ProductsContextProvider'
import CartContextProvider from '../context/CartContextProvider'
import { useUser } from '../hooks/useUSer'
import UserContextProvider from '../context/UserContextProvider'

const token = JSON.stringify(localStorage.getItem('token'))

const AppRoutes = () => {
  const { userToken, setUserToken } = useUser()

  useEffect(() => {
    setUserToken(token)
  }, [userToken])

  return (
    <Router>
      <UserContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <Navbar />
            <Switch>
              <Route path="/" exact component={HomeScreen} />
              <Route path="/products" exact component={HomeScreen} />
              <Route
                path="/products/:id"
                exact
                component={SingleProductScreen}
              />
              <Route
                path="/products/category/:name"
                exact
                component={ProductsCategorySpecify}
              />
              <Route path="/cart" exact component={CartScreen} />
              <Route path="/login" exact component={LoginScreen} />
              <Route path="/register" exact component={RegisterScreen} />
              <Route path="**" component={Error404Screen} />
            </Switch>
          </CartContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </Router>
  )
}

export default AppRoutes
