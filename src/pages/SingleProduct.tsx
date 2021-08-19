import React from 'react'
import { useParams } from 'react-router-dom'

interface SingleProductInterface {
  id: string | undefined
}
const SingleProduct = () => {
  const { id } = useParams<SingleProductInterface>()

  return (
    <div>
      <h3>Single Product {id} </h3>
    </div>
  )
}

export default SingleProduct
