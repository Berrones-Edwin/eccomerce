import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

interface PublicRouteProps extends RouteProps {
  component: any
  isAuthenticated: boolean
}
const PublicRoute = (props: PublicRouteProps) => {
  const { component: Component, isAuthenticated, ...rest } = props

  return (
    <Route
      {...rest}
      component={(props: any) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

export default PublicRoute
