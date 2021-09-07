import React, { useEffect, useState } from 'react'
import { getProductsByCategory } from '../services/getProductsByCategory'

type categoryType = {
  category: 'electronics' | 'jewelery' | 'men' | 'women'
}
export const useGetProductsByCategory = ({ category }: categoryType) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getProductsByCategory({ category })
      .then((res) => {
        if (res) {
          setProducts(res)
          setLoading(false)
        }
      })
      .catch((err) => {
        setLoading(false)
        setError(err)
      })
  }, [category])

  return {
    products,
    loading,
    error
  }
}
