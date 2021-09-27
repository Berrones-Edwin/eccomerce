import React from 'react'
import { Stack, Center, Heading, Text } from '@chakra-ui/react'

import { useWishList } from '../hooks/useWishList'
import WishListEmpty from '../components/WishListEmpty'
import GridProducts from '../components/GridProducts'

const WishListScreen = () => {
  const { wishList } = useWishList()
  return (
    <Stack minH={'100vh'}>
      <Stack
        h={'3rem'}
        direction={{
          base: 'column',
          md: 'row'
        }}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <Stack w={'15%'}>
          <Center>
            <Heading size={'md'}>WishList</Heading>
          </Center>
        </Stack>
        <Stack w={'85%'}>
          <Text>Products Found ( {wishList.length} ) </Text>
        </Stack>
      </Stack>
      {/* End NavBar */}
      {wishList.length === 0 && <WishListEmpty />}
      <GridProducts products={wishList} />
    </Stack>
  )
}

export default WishListScreen
