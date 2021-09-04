import React, { ReactNode } from 'react'
import { Stack } from '@chakra-ui/layout'
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack minW={'90vw'} maxH={'100vh'} as={'main'}>
      {children}
    </Stack>
  )
}

export default Layout
