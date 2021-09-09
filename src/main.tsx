import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './routes/AppRoutes'
import { ChakraProvider } from '@chakra-ui/react'
import UserContextProvider from './context/UserContextProvider'
import ProductsContextProvider from './context/ProductsContextProvider'
import CartContextProvider from './context/CartContextProvider'
import Layout from './components/Layout'
import { theme } from './theme/theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </CartContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
