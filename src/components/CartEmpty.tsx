import React from 'react'
import { Stack, Image, Heading, Text } from '@chakra-ui/react'
const CartEmpty = () => {
  return (
    <Stack
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      h={'100%'}
      spacing={3}
    >
      <Image src={'./assets/empty-cart.svg'} />
      <Heading size={'lg'}>Your bag is empty!!</Heading>
      <Text>
        Looks like you haven't added any items to the bag yet. Start shopping to
        fill it in.
      </Text>
    </Stack>
  )
}

export default CartEmpty
