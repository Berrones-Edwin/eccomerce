import React, { useContext } from 'react'
import { UserContext } from '../context/UserContextProvider'

export const useUser = () => {
  const { userToken, setUserToken } = useContext(UserContext)

  return { userToken, setUserToken }
}
