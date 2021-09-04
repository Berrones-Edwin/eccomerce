import React from 'react'
import { Product } from '../interfaces/Product'
import ProductComponent from './ProductComponent'
import { Stack } from '@chakra-ui/layout'

const GridProducts = ({ products }: { products: Array<Product> }) => {
  return (
    <>
      <Stack
        direction={{
          base: 'column',
          md: 'row'
        }}
        justify={{
          base: 'flex-start',
          md: 'space-around'
        }}
        align={'center'}
        wrap={'wrap'}
        padding={1}
        maxW={'100%'}
      >
        {products.map((product) => (
          <ProductComponent product={product} key={product.id} />
        ))}
      </Stack>
    </>
  )
}

export default GridProducts
