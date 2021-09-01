import React from 'react'
import GridProducts from '../components/GridProducts'
import useGetAllProducts from '../hooks/useGetAllProducts'

function HomeScreen() {
  const { products, loading, error } = useGetAllProducts()

  if (error) return <p>Upps. An Error ocurred</p>
  if (loading) return <p>Loading Data....</p>
  if (products.length === 0) return <p>The products is empty!!</p>

  return (
    <>
      <h3>My products</h3>
      <GridProducts products={products} />
    </>
  )
}

export default HomeScreen
