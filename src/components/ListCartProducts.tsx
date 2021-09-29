import React from 'react'
import { Stack, Button, Image, Text } from '@chakra-ui/react'
import { Product } from '../interfaces/Product'
import useCart from '../hooks/useCart'
import { useWishList } from '../hooks/useWishList'
const ListCartProducts = ({ product }: { product: Product }) => {
  const { cartProducts, setCartProducts } = useCart()
  const { setWishList } = useWishList()

  const handleDeleteProductToCart = () => {
    const newListProducts = cartProducts.filter((p) => p.id !== product.id)
    setCartProducts(newListProducts)
  }
  const handleSaveForLater = () => {
    setWishList((prev) => [...prev, product])
    const newListProducts = cartProducts.filter((p) => p.id !== product.id)
    setCartProducts(newListProducts)
  }
  return (
    <>
      <Stack spacing={2} direction={'row'} mb={'1rem'} pos={'relative'}>
        <Button
          pos={'absolute'}
          right={0}
          colorScheme="red"
          onClick={handleDeleteProductToCart}
        >
          X
        </Button>
        <Stack w={'50%'}>
          <Image src={product.image} alt={product.title} />
        </Stack>
        <Stack w={'50%'} align={'center'} justify={'center'}>
          <Text size={'sm'}>{product.title}</Text>
          <Text>$ {product.price}</Text>
          <Button colorScheme="blackAlpha" onClick={handleSaveForLater}>
            Save for Later
          </Button>
        </Stack>
      </Stack>
      <hr />
    </>
  )
}

export default ListCartProducts
