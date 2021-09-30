import React from 'react'
import {
  Link,
  useColorModeValue,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Stack,
  Table,
  Tbody,
  Tr,
  Td
} from '@chakra-ui/react'
import { Link as LinkRouter } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import useCart from '../hooks/useCart'
import ListCartProducts from './ListCartProducts'
import CartEmpty from './CartEmpty'

const LinksPrivateUser = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isLoggen } = useUser()
  const { cartProducts, calculateTotalProducts } = useCart()

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
      <Drawer size={'sm'} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Total Items ( {cartProducts.length} )</DrawerHeader>

          <DrawerBody>
            <Stack
              direction={'column'}
              justify={'flex-start'}
              minH={'100vh'}
              spacing={1}
            >
              {cartProducts.length === 0 && <CartEmpty />}
              {cartProducts.map((p, idx) => (
                <ListCartProducts
                  key={p.id + '-' + idx + '-' + Date.now() + idx}
                  product={p}
                />
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            {cartProducts.length === 0 ? (
              <Button
                size={'md'}
                onClick={onClose}
                width={'100%'}
                colorScheme="blue"
              >
                Start Shopping
              </Button>
            ) : (
              <>
                <Stack minW={'100%'} minH={'100%'} direction="column">
                  <Table variant="simple">
                    <Tbody>
                      <Tr>
                        <Td>Subtotal</Td>
                        <Td isNumeric>
                          {' '}
                          <b> ${calculateTotalProducts()} </b>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Shipping & Handling</Td>
                        <Td isNumeric>
                          {' '}
                          <b>$0.00</b>{' '}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Discount:</Td>
                        <Td isNumeric>
                          <b>$0.00</b>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Total:</Td>
                        <Td isNumeric>
                          <b> ${calculateTotalProducts()} </b>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                  <Button size={'md'} width={'100%'} colorScheme="blue">
                    Go to checkout
                  </Button>
                </Stack>
              </>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default LinksPrivateUser
