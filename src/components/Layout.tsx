import React, { ReactNode } from 'react'
import { Stack } from '@chakra-ui/layout'
import Footer from './Footer'
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Stack bgColor={'bgColorPrimary'} minH={'100vh'} as={'main'}>
        {children}
        <Footer />
      </Stack>
    </>
  )
}

export default Layout
