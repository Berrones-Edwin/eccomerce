import React, { useState } from 'react'

type UserContextDefaultValues = {
  userToken: string
  setUserToken: React.Dispatch<React.SetStateAction<string>>
}

export const UserContext = React.createContext<UserContextDefaultValues>({
  userToken: '',
  setUserToken: () => null
})

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userToken, setUserToken] = useState<string>(
    localStorage.getItem('token') || ''
  )
  return (
    <UserContext.Provider
      value={{
        userToken,
        setUserToken
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
