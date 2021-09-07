import React from 'react'
import { Product } from '../interfaces/Product'
import { Link } from 'react-router-dom'
import useCart from '../hooks/useCart'
import {
  Stack,
  Image,
  Heading,
  Text,
  Badge,
  Button,
  Box,
  IconButton,
  Link as LinkChakra
} from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'

const ProductComponent = ({ product }: { product: Product }) => {
  const { setCartProducts } = useCart()
  const handleAddToCartProduct = ({ product }: { product: Product }) => {
    setCartProducts((products) => [...products, product])
  }
  const { id, title, price, category, image } = product

  return (
    <Stack
      as={'article'}
      minW={'350px'}
      maxW={'350px'}
      align={'center'}
      borderRadius={'15px'}
      padding={5}
      shadow={'md'}
      height={'450px'}
      pos={'relative'}
    >
      <IconButton
        variant="outline"
        aria-label="Add to Favorite"
        icon={<FaHeart />}
        size={'md'}
        pos={'absolute'}
        top={'5px'}
        right={'5px'}
        color={'gray.500'}
        _hover={{
          color: 'red.500'
        }}
        z-index={1}
        border={0}
      />
      <Stack borderRadius={'15px'} width={'100%'} height={'250px'}>
        <LinkChakra as={Link} to={`/products/${id}`} height={'100%'}>
          <Image
            src={image}
            alt={title}
            height={'100%'}
            borderRadius={'15px'}
            width={'100%'}
            loading="lazy"
          />
        </LinkChakra>
      </Stack>
      <Box maxH={'300px'} minH={'100px'} mb={0}>
        <Heading as={'h3'} size={'sm'}>
          {title}
        </Heading>
        <span>
          <Link to={`/products/category/${category}`}>
            <Badge>{category}</Badge>
          </Link>
          <Text size={'md'}>
            Price $<b>{price}</b>
          </Text>
        </span>
      </Box>
      <Stack width={'100%'}>
        <Button
          color={'white'}
          bgColor={'secondary'}
          _hover={{
            bgColor: 'secondaryAlt'
          }}
          onClick={() => handleAddToCartProduct({ product })}
        >
          Add to cart
        </Button>
      </Stack>
    </Stack>
  )
}

export default ProductComponent
