import React from 'react'
import useCart from '../hooks/useCart'

const CartScreen = () => {
  const { cartProducts, setCartProducts } = useCart()

  const handleDeleteProductCart = ({ id }: { id: number }) => {
    const newCartProducts = cartProducts.filter((product) => product.id !== id)
    setCartProducts(newCartProducts)
  }
  let totalPriceProducts = 0

  cartProducts.forEach(
    (product) =>
      (totalPriceProducts = totalPriceProducts + Number(product.price))
  )

  if (cartProducts.length === 0) return <p>The cart is empty!!!</p>
  return (
    <>
      <h3>Cart Screen</h3>
      <table>
        <tbody>
          {cartProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  height="100"
                  width="100"
                  src={product.image}
                  alt={product.title}
                />
              </td>
              <td colSpan={3}>
                <p>{product.title}</p>
                <small>{product.category}</small>
              </td>
              <td>
                <p>{product.price}</p>
              </td>
              <td>
                <button
                  onClick={() => handleDeleteProductCart({ id: product.id })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td align="right" colSpan={3}>
              <p>
                Total <b>{totalPriceProducts}</b>{' '}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default CartScreen
