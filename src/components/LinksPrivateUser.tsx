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
  Image,
  Stack,
  Flex,
  FormControl,
  Input,
  Text
} from '@chakra-ui/react'
import { Link as LinkRouter } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import useCart from '../hooks/useCart'

const LinksPrivateUser = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isLoggen } = useUser()
  const { cartProducts } = useCart()

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
            {/* <Stack
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              h={'100%'}
              spacing={3}
            >
              <Image src={'assets/empty-cart.svg'} />
              <Heading size={'lg'}>Your bag is empty!!</Heading>
              <Text>
                Looks like you haven't added any items to the bag yet. Start
                shopping to fill it in.
              </Text>
            </Stack> */}
            <Stack
              direction={'column'}
              justify={'flex-start'}
              minH={'100vh'}
              spacing={1}
            >
              {cartProducts.map((p, idx) => (
                <>
                  <Stack
                    spacing={2}
                    key={p.id + '-' + idx + '-' + Date.now() + idx}
                    direction={'row'}
                    mb={'1rem'}
                  >
                    <Stack w={'50%'}>
                      <Image src={p.image} alt={p.title} />
                    </Stack>
                    <Stack w={'50%'} align={'center'} justify={'center'}>
                      <Text size={'sm'}>{p.title}</Text>
                      <Text>$ {p.price}</Text>
                      <Button>Save for Later</Button>
                    </Stack>
                  </Stack>
                  <hr />
                </>
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
              <Button size={'md'} width={'100%'} colorScheme="blue">
                Go to checkout
              </Button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default LinksPrivateUser
