import React from 'react'
import { Product } from '../interfaces/Product'
import { Link } from 'react-router-dom'
import useCart from '../hooks/useCart'

const ProductComponent = ({ product }: { product: Product }) => {
  const { setCartProducts } = useCart()
  const handleAddToCartProduct = ({ product }: { product: Product }) => {
    setCartProducts((products) => [...products, product])
  }
  const { id, title, price, category, description, image } = product

  return (
    <article key={id}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} height="100" width="100" loading="lazy" />
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <span>
        <Link to={`/products/category/${category}`}>
          <p> Category {category}</p>
        </Link>
        <b>{price}</b>
      </span>
      <section>
        <button onClick={() => handleAddToCartProduct({ product })}>
          Add to cart
        </button>
      </section>
    </article>
  )
}

export default ProductComponent
