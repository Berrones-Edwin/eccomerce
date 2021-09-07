import React, { ReactNode } from 'react'
import { Stack } from '@chakra-ui/layout'
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack bgColor={'bgColorPrimary'} minW={'100vw'} minH={'100vh'} as={'main'}>
      {children}
    </Stack>
  )
}

export default Layout
