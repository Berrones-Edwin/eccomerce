import React from 'react'
import { Stack } from '@chakra-ui/react'
import GridProducts from '../components/GridProducts'
import SideBar from '../components/SideBar'
import LoadingScreen from '../components/LoadingScreen'
import useGetAllProducts from '../hooks/useGetAllProducts'
import ServerDownScreen from '../components/ServerDownScreen'

const ProductsScreen = () => {
  const { products, loading, error } = useGetAllProducts()

  if (error) return <ServerDownScreen />
  if (loading) return <LoadingScreen />
  if (products.length === 0) return <p>The products is empty!!</p>
  return (
    <Stack
      direction={{
        base: 'column',
        md: 'row'
      }}
      justify={'center'}
      alignItems={{
        base: 'center',
        md: 'flex-start'
      }}
      w={'100%'}
    >
      <Stack
        width={{
          base: '90%',
          md: '85%'
        }}
        minH={'100vh'}
      >
        <GridProducts products={products} />
      </Stack>
      <Stack
        width={{
          base: '90%',
          md: '15%'
        }}
        minH={'100vh'}
      >
        <SideBar />
      </Stack>
    </Stack>
  )
}

export default ProductsScreen
