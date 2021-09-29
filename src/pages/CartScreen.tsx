import React from 'react'
import { Skeleton, Stack, SkeletonText } from '@chakra-ui/react'
// import React, { useEffect } from 'react'
// import { useHistory } from 'react-router'
// import useCart from '../hooks/useCart'
// import { useUser } from '../hooks/useUser'

const CartScreen = () => {
  // const { isLoggen } = useUser()
  // const history = useHistory()

  // useEffect(() => {
  //   if (!isLoggen) {
  //     history.push({
  //       pathname: '/'
  //     })
  //   }
  // }, [isLoggen])
  // const { cartProducts, setCartProducts } = useCart()

  // const handleDeleteProductCart = ({ id }: { id: number }) => {
  //   const newCartProducts = cartProducts.filter((product) => product.id !== id)
  //   setCartProducts(newCartProducts)
  // }
  // let totalPriceProducts = 0

  // cartProducts.forEach(
  //   (product) =>
  //     (totalPriceProducts = totalPriceProducts + Number(product.price))
  // )

  return (
    <>
      <Stack minH={'100vh'} display={'flex'}>
        <Skeleton maxW={'350px'} h={'400px'} />
        <Skeleton maxW={'350px'} h={'400px'} />
      </Stack>
    </>
  )
}

export default CartScreen
