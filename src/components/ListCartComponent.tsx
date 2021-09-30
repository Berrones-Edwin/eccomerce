import React from 'react'
import {
  Button,
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
import ListCartProducts from './ListCartProducts'
import CartEmpty from './CartEmpty'
import useCart from '../hooks/useCart'

const ListCartComponent = ({ isOpen, onClose }: any) => {
  const { cartProducts, calculateTotalProducts } = useCart()
  return (
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
  )
}

export default ListCartComponent
