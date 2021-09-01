import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './routes/AppRoutes'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/Layout'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
