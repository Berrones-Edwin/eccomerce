import React, { createContext, ReactNode, useState } from 'react'
import { Product } from '../interfaces/Product'

type CartContextDefaultValues = {
  cartProducts: Array<Product>
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const CartContext = createContext<CartContextDefaultValues>({
  cartProducts: [],
  setCartProducts: () => null
})

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([])
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
