import React from 'react'
import { Stack, Image, Heading } from '@chakra-ui/react'

const ProductNotFound = () => {
  return (
    <Stack
      minH={'100vh'}
      minW={'100vw'}
      direction={'column'}
      justify={'center'}
      align={'center'}
      spacing={3}
    >
      <Image w={'500px'} src="/not-found.svg" />
      <Heading size={'lg'}>The product was not found!! :c</Heading>
    </Stack>
  )
}

export default ProductNotFound
