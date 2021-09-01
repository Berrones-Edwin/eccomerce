import React from 'react'
import { Product } from '../interfaces/Product'
import ProductComponent from './ProductComponent'

const GridProducts = ({ products }: { products: Array<Product> }) => {
  return (
    <>
      <h3>Products</h3>
      {products.map((product) => (
        <ProductComponent product={product} key={product.id} />
      ))}
    </>
  )
}

export default GridProducts
