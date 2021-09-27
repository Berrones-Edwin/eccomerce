import React, { useContext } from 'react'
import { WishListContext } from '../context/WishListContextProvider'

export const useWishList = () => {
  const { wishList, setWishList } = useContext(WishListContext)

  return { wishList, setWishList }
}
