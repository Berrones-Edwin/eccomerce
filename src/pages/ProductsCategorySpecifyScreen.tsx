import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsByCategory } from '../hooks/useGetProductsByCategory'
import { Stack } from '@chakra-ui/react'
import GridProducts from '../components/GridProducts'
import SideBar from '../components/SideBar'

interface ProductsCategorySpecifyInterface {
  name: string | undefined
}
const CATEGORIES = {
  electronics: 'electronics',
  jewelery: 'jewelery',
  men: "men's clothing",
  women: "women's clothing"
}
const ProductsCategorySpecify = () => {
  const { name } = useParams<ProductsCategorySpecifyInterface>()
  const { products, error, loading } = useGetProductsByCategory({
    category: CATEGORIES[name]
  })

  if (error) return <p>Upps. An Error ocurred</p>
  if (loading) return <p>Loading Data....</p>
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
