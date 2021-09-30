import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'

const useCart = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext)

  const calculateTotalProducts = (): number => {
    let total = 0
    if (cartProducts.length > 0) {
      cartProducts.forEach((products) => {
        total = total + Number(products.price)
      })
    }

    return Math.ceil(total)
  }
  return {
    cartProducts,
    setCartProducts,
    calculateTotalProducts
  }
}

export default useCart
