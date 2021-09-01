import React from 'react'
import { Link } from 'react-router-dom'
import useGetAllProducts from '../hooks/useGetAllProducts'
import { Product } from '../interfaces/Product'

function HomeScreen() {
  const { products, loading, error } = useGetAllProducts()

  if (error) return <p>Upps. An Error ocurred</p>
  if (loading) return <p>Loading Data....</p>
  if (products.length === 0) return <p>The products is empty!!</p>

  const handleAddToCartProduct = (product: Product) => {
    console.log({ product: product.title })
  }

  return (
    <>
      <h3>My products</h3>
      {products.map((product) => (
        <article key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              height="100"
              width="100"
              loading="lazy"
            />
            <h3>{product.title}</h3>
          </Link>
          <p>{product.description}</p>
          <span>
            <Link to={`/products/category/${product.category}`}>
              <p> Category {product.category}</p>
            </Link>
            <b>{product.price}</b>
          </span>
          <section>
            <button onClick={() => handleAddToCartProduct(product)}>
              Add to cart
            </button>
          </section>
        </article>
      ))}
    </>
  )
}

export default HomeScreen
