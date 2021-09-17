import React from 'react'
import GridProducts from '../components/GridProducts'
import SideBar from '../components/SideBar'
import { Stack } from '@chakra-ui/react'
import useGetAllProducts from '../hooks/useGetAllProducts'

function HomeScreen() {
  const { products, loading, error } = useGetAllProducts()

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

export default HomeScreen
