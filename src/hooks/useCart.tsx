import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'

const useCart = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext)
  return {
    cartProducts,
    setCartProducts
  }
}

export default useCart
