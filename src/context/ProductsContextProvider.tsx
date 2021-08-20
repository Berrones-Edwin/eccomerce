import React, { ReactNode, useState } from 'react'
import { getData } from '../helpers/local-storage'
import { Product } from '../interfaces/Product'

type ProductsContextDefaultValues = {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const ProductsContext =
  React.createContext<ProductsContextDefaultValues>({
    products: [],
    setProducts: () => null
  })

const data: any = getData({ key: 'products' })

const ProductsContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts]: [
    Product[],
    React.Dispatch<React.SetStateAction<Product[]>>
  ] = useState<Product[]>(data || [])

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
