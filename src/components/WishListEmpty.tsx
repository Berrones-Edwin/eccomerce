import React from 'react'
import { Stack, Image, Heading, Text } from '@chakra-ui/react'

const WishListEmpty = () => {
  return (
    <Stack minHeight={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Image w={'500px'} h={'500px'} src={'/public/wishlist.svg'} />
      <Heading>No Favorites Yet</Heading>
      <Text>Tap Heart next to the product. We'll save them you here.</Text>
    </Stack>
  )
}

export default WishListEmpty
