import React from 'react'
import { useParams } from 'react-router-dom'
import useGetSingleProduct from '../hooks/useGetSingleProduct'

interface SingleProductInterface {
  id: string | undefined
}
const SingleProductScreen = () => {
  const { id } = useParams<SingleProductInterface>()
  const { product, loading, error } = useGetSingleProduct({ id })

  if (error) return <p>Upps. An Error ocurred</p>
  if (loading) return <p>Loading Data....</p>
  if (!product) return <p>The product was not found!! :c</p>
  return (
    <div>
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
    </div>
  )
}

export default SingleProductScreen
