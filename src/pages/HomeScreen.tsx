import React, { useEffect, useState } from 'react'
import { Product } from '../interfaces/Product'
import { getAllProducts } from '../services/getAllProducts'

function HomeScreen() {
  const [prodcuts, setProdcuts] = useState<Product[]>([])
  useEffect(() => {
    getAllProducts().then(setProdcuts)
  }, [])
  if (prodcuts.length === 0) return <p>The products is empty!!</p>

  return (
    <>
      <h3>My products</h3>
      {prodcuts.map((product) => (
        <article key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            height="100"
            width="100"
            loading="lazy"
          />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <span>
            <p> Category {product.category}</p>
            <b>{product.price}</b>
          </span>
        </article>
      ))}
    </>
  )
}

export default HomeScreen
