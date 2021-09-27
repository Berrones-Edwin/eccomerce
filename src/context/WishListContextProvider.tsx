import React, { createContext, ReactNode, useState } from 'react'
import { Product } from '../interfaces/Product'

type WishListContextDefaultValues = {
  wishList: Array<Product>
  setWishList: React.Dispatch<React.SetStateAction<Product[]>>
}

export const WishListContext = createContext<WishListContextDefaultValues>({
  wishList: [],
  setWishList: () => null
})

const WishListContextProvider = ({ children }: { children: ReactNode }) => {
  const [wishList, setWishList] = useState<Product[]>([])
  return (
    <WishListContext.Provider
      value={{
        wishList,
        setWishList
      }}
    >
      {children}
    </WishListContext.Provider>
  )
}

export default WishListContextProvider
