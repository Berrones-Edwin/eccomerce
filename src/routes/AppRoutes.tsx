import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomeScreen from '../pages/HomeScreen'
import CartScreen from '../pages/CartScreen'

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/products" exact component={HomeScreen} />
        <Route path="/products/{id}" exact component={HomeScreen} />
        <Route path="/products/category/{name}" exact component={HomeScreen} />
        <Route path="/cart" exact component={CartScreen} />
      </Switch>
    </Router>
  )
}

export default AppRoutes
