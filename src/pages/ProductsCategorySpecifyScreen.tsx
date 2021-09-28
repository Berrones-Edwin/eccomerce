import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsByCategory } from '../hooks/useGetProductsByCategory'
import { Stack } from '@chakra-ui/react'
import GridProducts from '../components/GridProducts'
import SideBar from '../components/SideBar'
import LoadingScreen from '../components/LoadingScreen'

interface ProductsCategorySpecifyInterface {
  name: string
}

const ProductsCategorySpecify = () => {
  const { name } = useParams<ProductsCategorySpecifyInterface>()

  const { products, error, loading } = useGetProductsByCategory({
    category: name
  })

  if (error) return <p>Upps. An Error ocurred</p>
  if (loading) return <LoadingScreen />
  if (products.length === 0) return <p>The products is empty!!</p>

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
