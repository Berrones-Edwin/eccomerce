import { useEffect, useState } from 'react'
import { Product } from '../interfaces/Product'
import { getAllProducts } from '../services/getAllProducts'

const useGetAllProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    getAllProducts()
      .then((listProducts: Product[]) => {
        if (listProducts) {
          setProducts(listProducts)
          setLoading(false)
        }
      })
      .catch((err) => {
        setLoading(false)
        setError(err)
      })
  }, [])

  return {
    products,
    loading,
    error
  }
}

export default useGetAllProducts
