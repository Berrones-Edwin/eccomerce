import React from 'react'
import { Product } from '../interfaces/Product'
import { Link } from 'react-router-dom'
import useCart from '../hooks/useCart'
import {
  Stack,
  Image,
  Heading,
  Text,
  Box,
  IconButton,
  useToast,
  Link as LinkChakra
} from '@chakra-ui/react'
import { FaHeart, FaCartPlus } from 'react-icons/fa'
import { useUser } from '../hooks/useUser'
import RatingStart from './RatingStart'

const ProductComponent = ({ product }: { product: Product }) => {
  const { id, title, price, image } = product

  const { setCartProducts } = useCart()
  const toast = useToast()
  const { isLoggen } = useUser()

  const handleAddToCartProduct = ({ product }: { product: Product }) => {
    if (!isLoggen) {
      toast({
        title: 'Sign in',
        description: 'Hi, For add to favorites / add to cart, you sign in',
        status: 'warning',
        duration: 3000,
        isClosable: true
      })
      return
    }

    setCartProducts((products) => [...products, product])
    toast({
      title: 'Good Choice',
      description: `The product ${product.title} was added successfully`,
      status: 'success',
      duration: 3000,
      isClosable: true
    })
  }

  return (
    <Stack
      as={'article'}
      minW={'350px'}
      maxW={'350px'}
      align={'center'}
      padding={5}
      height={'500px'}
      pos={'relative'}
    >
      <Stack borderRadius={'15px'} width={'100%'} height={'350px'}>
        <LinkChakra as={Link} to={`/products/${id}`} height={'100%'}>
          <Image
            src={image}
            alt={title}
            height={'100%'}
            borderRadius={'15px'}
            width={'100%'}
            loading="lazy"
          />
          <Box onClick={(e) => e.stopPropagation()}>
            <IconButton
              variant="outline"
              aria-label="Add to Favorite"
              icon={<FaHeart />}
              size={'lg'}
              pos={'absolute'}
              top={'0'}
              right={'5px'}
              color={'gray.500'}
              _hover={{
                color: 'red.500'
              }}
              z-index={1}
              border={0}
            />
          </Box>
        </LinkChakra>
      </Stack>
      <Heading as={'h3'} size={'sm'} mb={2}>
        {title}
      </Heading>

      <Text size={'lg'}>${price}</Text>

      <RatingStart
        rating={product.rating.rate}
        count={product.rating.count}
        justify={'flex-start'}
      />

      <IconButton
        borderRadius={'9999px'}
        minH={'55px'}
        minW={'55px'}
        bgColor={'pink'}
        position={'absolute'}
        bottom={'120px'}
        right={'15px'}
        aria-label="Add Product To cart"
        icon={<FaCartPlus />}
        onClick={() => handleAddToCartProduct({ product })}
      />
    </Stack>
  )
}

export default ProductComponent
