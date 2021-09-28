import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetSingleProduct from '../hooks/useGetSingleProduct'
import {
  Stack,
  Heading,
  Text,
  Box,
  Image,
  Flex,
  Select,
  Link,
  Button,
  FormControl,
  Input,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useToast
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useUser } from '../hooks/useUser'
import useCart from '../hooks/useCart'
import { Product } from '../interfaces/Product'
import { useGetProductsByCategory } from '../hooks/useGetProductsByCategory'
import GridProducts from '../components/GridProducts'
import RatingStart from '../components/RatingStart'
import LoadingScreen from '../components/LoadingScreen'

interface SingleProductInterface {
  id: string | undefined
}

const SingleProductScreen = () => {
  const { id } = useParams<SingleProductInterface>()
  const { product, loading, error } = useGetSingleProduct({ id })
  const [amount, setAmount] = useState(1)
  const { isLoggen } = useUser()
  const { setCartProducts } = useCart()
  const toast = useToast()

  const { products: productsCategory, loading: loadingProductsCategory } =
    useGetProductsByCategory({ category: product?.category })

  const handleInputChange = (e: any) => {
    setAmount(e.target.value)
  }

  const handlePlusAmountProduct = () => {
    setAmount(amount + 1)
  }
  const handleRestAmountProduct = () => {
    if (amount > 1) setAmount(amount - 1)
    else setAmount(1)
  }

  const hanldeAddProductToCart = ({ product }: { product: Product }) => {
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
    for (let i = 0; i < amount; i++) {
      setCartProducts((products) => [...products, product])
    }
    toast({
      title: 'Good Choice',
      description: `The product ${product.title} was added successfully`,
      status: 'success',
      duration: 3000,
      isClosable: true
    })
  }

  if (error) return <p>Upps. An Error ocurred</p>
  if (loading) return <LoadingScreen />
  if (!product) return <p>The product was not found!! :c</p>
  return (
    <Stack as={'section'} align={'center'}>
      <Stack
        maxW={'90vw'}
        flexDir={{
          base: 'column',
          md: 'row'
        }}
      >
        <Stack
          as={'article'}
          width={{
            base: '100%',
            md: '20%'
          }}
          spacing={1}
          padding={3}
        >
          <Image src={product.image} alt={product.title} loading="lazy" />
        </Stack>
        <Stack spacing={2} as={'article'} padding={3} width={'100%'}>
          <Heading as={'h3'} size={'lg'}>
            {product.title}
          </Heading>
          <Flex direction={'row'}>
            <Flex width={'70%'} justify={'flex-start'} align={'center'}>
              <Text>
                <b>${product.price}</b>
              </Text>
            </Flex>
            <RatingStart
              justify={'flex-end'}
              text={'Rating'}
              rating={product.rating.rate}
            />
          </Flex>
          <Text>
            {product.description}. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Saepe ad iusto fugiat quidem, doloremque culpa
            nisi, alias, cumque nulla hic perferendis similique perspiciatis
            eius mollitia voluptates doloribus repudiandae consequatur aliquam.
          </Text>
          <Flex mb={3} width={'100%'}>
            <Flex
              as={'article'}
              display={'flex'}
              justify={'flex-start'}
              align={'center'}
              width={'50%'}
            >
              <Text>
                <b> Category: </b>
                {product.category}.
              </Text>
            </Flex>
            <Flex
              as={'article'}
              display={'flex'}
              justify={'center'}
              align={'center'}
              width={'50%'}
            >
              <Link href={'#'}>
                <Text>Size Guide</Text>
              </Link>
            </Flex>
          </Flex>

          {/* Select Size */}
          <Box as={'section'} width={'50%'}>
            <Select placeholder="Size" variant="filled">
              <option value="option1">S</option>
              <option value="option2">M</option>
              <option value="option3">LG</option>
            </Select>
          </Box>
          {/* End Select Size */}

          {/* Select Colors */}
          <Stack>
            <Text>Color</Text>
            <Stack
              spacing={2}
              direction={'row'}
              maxW={'150px'}
              minW={'150px'}
              padding={'1'}
            >
              <Button
                bgColor={'pink'}
                _hover={{
                  bgColor: 'pink.300'
                }}
              ></Button>
              <Button
                bgColor={'red'}
                _hover={{
                  bgColor: 'red.300'
                }}
              ></Button>
              <Button
                bgColor={'gray'}
                _hover={{
                  bgColor: 'gray.300'
                }}
              ></Button>
            </Stack>
          </Stack>
          {/* End Select Colors */}
          {/* Amount  */}
          <Stack
            minW={'100%'}
            direction={{
              base: 'column',
              md: 'row'
            }}
            align={'center'}
            justify={{
              base: 'center',
              md: 'flex-start'
            }}
            spacing={4}
          >
            <form>
              <Flex>
                <Button onClick={handleRestAmountProduct} bgColor={'gray.300'}>
                  {' '}
                  -{' '}
                </Button>
                <FormControl>
                  <Input
                    type="number"
                    value={amount}
                    name="amountProduct"
                    id="amountProduct"
                    textAlign="center"
                    width={'100px'}
                    border={'1px solid gray'}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <Button onClick={handlePlusAmountProduct} bgColor={'gray.300'}>
                  {' '}
                  +{' '}
                </Button>
              </Flex>
            </form>
            <Button
              onClick={() => hanldeAddProductToCart({ product })}
              width={'xs'}
              colorScheme={'whatsapp'}
              size={'lg'}
            >
              Add to Cart
            </Button>
            <Button width={'xs'} colorScheme={'blackAlpha'} size={'lg'}>
              Pick Up in store
            </Button>
          </Stack>
          {/* <h3>Reviews</h3> */}
          {/* End Amount  */}
          {/* Reviews & description */}
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Description</Tab>
              <Tab>Review</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Adipisci cumque rem suscipit illum architecto vel dicta quasi
                  quam, sint, nesciunt, fugiat assumenda sapiente sit iure odit
                  autem? Debitis nobis veritatis nulla asperiores rerum eos
                  laborum nesciunt architecto dolorum excepturi, libero fugit,
                  ex possimus eius itaque iusto nam quis vero deleniti
                  blanditiis sapiente aliquam, obcaecati quae sint? Accusantium
                  repellendus autem aut beatae ullam nesciunt dolores laborum
                  fugiat, voluptatem a veritatis? Dicta odio labore pariatur
                  exercitationem est dolores vitae voluptatum repellendus nihil
                  at aut veritatis nostrum reiciendis autem assumenda, maiores
                  temporibus. Soluta quisquam consequuntur quasi distinctio
                  minima ut facilis deserunt fugiat porro fuga placeat veritatis
                  explicabo repellendus ipsum obcaecati molestiae, laudantium
                  incidunt ab deleniti quia aliquam iste. Sunt tenetur eius
                  consequatur laudantium maxime, numquam et veritatis alias
                  illum, sed neque. A dolor dolorem expedita illo sunt! Facilis
                  laudantium officia, amet corrupti modi optio unde pariatur,
                  iusto reiciendis libero, hic sunt doloribus at.
                </Text>
              </TabPanel>
              <TabPanel>
                <Heading size={'md'}>2 Reviews</Heading>
                <Stack mt={3}>
                  <Heading size={'sm'}>Jame D. Smith</Heading>
                  <Flex>
                    {Array(5)
                      .fill(0)
                      .map((star, idx) => (
                        <>
                          <StarIcon
                            color={
                              idx + 1 <= Math.ceil(3) ? 'teal.500' : 'gray.300'
                            }
                            key={star + idx}
                          />
                        </>
                      ))}
                  </Flex>
                  <Text>24 April 2021</Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    similique quod, deserunt quam molestias voluptatum maxime
                    quo nostrum sequi at nulla atque ut architecto doloribus
                    temporibus, suscipit doloremque molestiae distinctio?
                    Dolores modi accusantium quia nobis sequi consequuntur
                    delectus ad aut iste eius saepe doloribus quis ipsam quasi
                    est, iure voluptatem.
                  </Text>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
          {/* End Reviews & description */}
          {/* Similar Products  */}
          <Stack as={'section'}>
            <Heading as={'h3'} size={'md'}>
              Similar Products
            </Heading>

            {loadingProductsCategory ? (
              'Loading Data...'
            ) : (
              <GridProducts products={productsCategory.slice(0, 3)} />
            )}
          </Stack>
          {/* End Similar Products  */}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SingleProductScreen
