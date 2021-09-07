import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './routes/AppRoutes'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/Layout'
import { theme } from './theme/theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Layout>
        <AppRoutes />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
