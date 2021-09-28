import React, { useEffect, useState } from 'react'
import { Product } from '../interfaces/Product'
import { getProductsByCategory } from '../services/getProductsByCategory'

export type categoryType = {
  category: 'electronics' | 'jewelery' | "men's clothing" | "women's clothing"
}
export const useGetProductsByCategory = ({ category }: { category: any }) => {
  const [products, setProducts] = useState<Product[]>([])
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
