import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './routes/AppRoutes'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import UserContextProvider from './context/UserContextProvider'
import ProductsContextProvider from './context/ProductsContextProvider'
import CartContextProvider from './context/CartContextProvider'
import Layout from './components/Layout'
import { theme } from './theme/theme'
import WishListContextProvider from './context/WishListContextProvider'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <WishListContextProvider>
              <Layout>
                <ColorModeScript initialColorMode="light" />
                <AppRoutes />
              </Layout>
            </WishListContextProvider>
          </CartContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
