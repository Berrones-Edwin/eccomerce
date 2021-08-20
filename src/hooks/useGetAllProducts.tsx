import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContextProvider'
import { saveData } from '../helpers/local-storage'
import { Product } from '../interfaces/Product'
import { getAllProducts } from '../services/getAllProducts'

const useGetAllProducts = () => {
  const { products, setProducts } = useContext(ProductsContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    getAllProducts()
      .then((listProducts: Product[]) => {
        if (listProducts) {
          setProducts(listProducts)
          saveData<Product[]>({ key: 'products', data: listProducts })
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
