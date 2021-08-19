import React from 'react'
import { useParams } from 'react-router-dom'

interface ProductsCategorySpecifyInterface {
  name: string | undefined
}
const ProductsCategorySpecify = () => {
  const { name } = useParams<ProductsCategorySpecifyInterface>()
  return (
    <div>
      <h3>Category {name}</h3>
    </div>
  )
}

export default ProductsCategorySpecify
