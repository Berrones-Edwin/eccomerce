import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContextProvider'
import { Product } from '../interfaces/Product'
import { getSingleProduct } from '../services/getSingleProduct'

type getDetailsProductType = {
  setProduct: React.Dispatch<React.SetStateAction<Product | undefined>>
  setloading: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<null>>
  id: string | undefined
}
function getDetailsProduct({
  setProduct,
  setloading,
  setError,
  id
}: getDetailsProductType) {
  setloading(true)
  getSingleProduct({ id: Number(id) })
    .then((res) => {
      setloading(false)
      setProduct(res)
    })
    .catch((err) => {
      setError(err)
      setloading(false)
    })
}

const useGetSingleProduct = ({ id }: { id: string | undefined }) => {
  const { products } = useContext(ProductsContext)

  const [product, setProduct] = useState<Product>()
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const productExist = products.some((p) => p.id.toString() === id)
    if (!productExist) {
      getDetailsProduct({ setProduct, setloading, setError, id })
    } else {
      products.forEach((p) => {
        if (p.id.toString() === id) setProduct(p)
      })
    }
  }, [id])

  return {
    product,
    loading,
    error
  }
}

export default useGetSingleProduct
