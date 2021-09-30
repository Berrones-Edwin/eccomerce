import React from 'react'
import { Link, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { Link as LinkRouter } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import ListCartComponent from './ListCartComponent'

const LinksPrivateUser = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isLoggen } = useUser()

  if (!isLoggen) return null

  return (
    <>
      <Link
        as={LinkRouter}
        p={2}
        to={'/wishlist'}
        fontSize={'sm'}
        fontWeight={500}
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor
        }}
      >
        WishList
      </Link>
      <Link
        p={2}
        to={'#'}
        fontSize={'sm'}
        fontWeight={500}
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor
        }}
        onClick={onOpen}
      >
        Cart
      </Link>
      <ListCartComponent isOpen={isOpen} onClose={onClose} />
    </>
  )
}
export default LinksPrivateUser
