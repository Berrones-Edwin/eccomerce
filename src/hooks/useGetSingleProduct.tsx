import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContextProvider'
import { Product } from '../interfaces/Product'
import { getSingleProduct } from '../services/getSingleProduct'

const useGetSingleProduct = ({ id }: { id: string | undefined }) => {
  const { products } = useContext(ProductsContext)

  const [loading, setloading] = useState(false)
  const [error, setError] = useState(null)

  let singleProduct: Product | undefined = products.find(
    (product: Product) => product.id.toString() === id
  )

  useEffect(() => {
    if (!singleProduct) {
      setloading(true)
      getSingleProduct({ id: Number(id) })
        .then((res) => {
          setloading(false)
          singleProduct = res
        })
        .catch((err) => {
          setError(err)
          setloading(false)
        })
    }
  }, [id])

  return {
    singleProduct,
    loading,
    error
  }
}

export default useGetSingleProduct
