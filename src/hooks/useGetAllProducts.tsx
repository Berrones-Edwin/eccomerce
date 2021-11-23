import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContextProvider'
import { BASE_URL_API } from '../enviroment/env'
import { saveData } from '../helpers/local-storage'
import { Product } from '../interfaces/Product'
import { getAllProducts } from '../services/getAllProducts'

const url = `${BASE_URL_API}products`
const useGetAllProducts = () => {
  const { products, setProducts } = useContext(ProductsContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (products.length === 0) {
      setLoading(true)
      getAllProducts({ url })
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
    }
  }, [])

  return {
    products,
    loading,
    error,
    setProducts
  }
}

export default useGetAllProducts
