import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContextProvider'
import { signIn } from '../services/auth'
import useCart from './useCart'

export const useUser = () => {
  const { userToken, setUserToken } = useContext(UserContext)
  const { setCartProducts } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = ({
    username,
    password
  }: {
    username: string
    password: string
  }) => {
    setLoading(true)
    signIn({ username, password })
      .then((resp) => {
        if (resp) {
          localStorage.setItem('token', resp.token)
          setUserToken(resp.token)
          console.log({ userToken })
          setLoading(false)
        }
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }

  const logout = () => {
    setUserToken('')
    setCartProducts([])
    localStorage.removeItem('token')
  }

  return { isLoggen: Boolean(userToken), loading, error, login, logout }
}
