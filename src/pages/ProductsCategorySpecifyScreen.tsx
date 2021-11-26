import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsByCategory } from '../hooks/useGetProductsByCategory'
import { Stack } from '@chakra-ui/react'
import GridProducts from '../components/GridProducts'
import SideBar from '../components/SideBar'
import LoadingScreen from '../components/LoadingScreen'
import ServerDownScreen from '../components/ServerDownScreen'
import ProductNotFound from '../components/ProductNotFound'

interface ProductsCategorySpecifyInterface {
  name: string
}

const ProductsCategorySpecify = () => {
  const { name } = useParams<ProductsCategorySpecifyInterface>()

  const { products, error, loading } = useGetProductsByCategory({
    category: name
  })

  if (error) return <ServerDownScreen />
  if (loading) return <LoadingScreen />
  if (products.length === 0) return <ProductNotFound />

  return (
    <>
      <Stack
        as={'section'}
        direction={{
          base: 'column',
          md: 'row'
        }}
        align={{
          base: 'center',
          md: 'flex-start'
        }}
      >
        <GridProducts products={products} />
        <SideBar />
      </Stack>
    </>
  )
}

export default ProductsCategorySpecify
