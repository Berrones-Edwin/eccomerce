import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomeScreen from '../pages/HomeScreen'
import CartScreen from '../pages/CartScreen'
import SingleProduct from '../pages/SingleProductScreen'
import ProductsCategorySpecify from '../pages/ProductsCategorySpecifyScreen'
import Navbar from '../components/Navbar'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'

import ProductsContextProvider from '../context/ProductsContextProvider'

const AppRoutes = () => {
  return (
    <Router>
      <ProductsContextProvider>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/products" exact component={HomeScreen} />
          <Route path="/products/:id" exact component={SingleProduct} />
          <Route
            path="/products/category/:name"
            exact
            component={ProductsCategorySpecify}
          />
          <Route path="/cart" exact component={CartScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
        </Switch>
      </ProductsContextProvider>
    </Router>
  )
}

export default AppRoutes
