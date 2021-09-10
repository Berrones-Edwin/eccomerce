import React from 'react'
import { Link, useColorModeValue } from '@chakra-ui/react'
import { Link as LinkRouter } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import useCart from '../hooks/useCart'

const ITEMS = [
  {
    id: 1,
    name: 'Cart',
    href: '/cart'
  },
  {
    id: 2,
    name: 'WishList',
    href: '/wishlist'
  }
]

const LinksPrivateUser = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const { isLoggen } = useUser()
  const { cartProducts } = useCart()

  if (!isLoggen) return null
  return (
    <>
      {ITEMS.map((item) => (
        <Link
          key={item.id}
          as={LinkRouter}
          p={2}
          to={item.href}
          fontSize={'sm'}
          fontWeight={500}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor
          }}
        >
          {item.name === 'Cart'
            ? `${item.name} ( ${cartProducts.length + 1} )`
            : item.name}
        </Link>
      ))}
    </>
  )
}

export default LinksPrivateUser
