import React, { ReactNode } from 'react'
import { Stack } from '@chakra-ui/layout'
const Layout = ({ children }: { children: ReactNode }) => {
  return <Stack>{children}</Stack>
}

export default Layout
