import React from 'react'
import GridProducts from '../components/GridProducts'
import SideBar from '../components/SideBar'
import {
  Stack,
  Text,
  Heading,
  Image,
  Button,
  Flex,
  Grid,
  GridItem,
  Center
} from '@chakra-ui/react'
// import useGetAllProducts from '../hooks/useGetAllProducts'
import MiniHero from '../components/MiniHero'
import NewsLetter from '../components/NewsLetter'
import { useGetProductsByCategory } from '../hooks/useGetProductsByCategory'

function HomeScreen() {
  // const { products, loading, error } = useGetAllProducts()

  // if (error) return <p>Upps. An Error ocurred</p>
  // if (loading) return <p>Loading Data....</p>
  // if (products.length === 0) return <p>The products is empty!!</p>

  const { products, loading } = useGetProductsByCategory({
    category: "women's clothing"
  })

  return (
    <>
      <Flex direction={'column'} align={'center'} minH={'100vh'}>
        <Stack
          mb={'3rem'}
          direction={{
            base: 'column',
            md: 'row'
          }}
          aling={'center'}
          height={'400px'}
          width={'80%'}
          padding={2}
        >
          <Stack
            width={{
              base: '100%',
              md: '70%'
            }}
            direction={'column'}
            align={'center'}
            justify={'center'}
          >
            <Text>Summer Collection</Text>
            <Heading> Colorful summer dresses are alreadyin store</Heading>
            <Button bgColor={'green'} size={'lg'} color={'#fff'}>
              Learn more...
            </Button>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '30%'
            }}
            height={'100%'}
            direction={'row'}
            justify={'flex-end'}
          >
            <Image
              src={
                'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
              alt={'summer'}
            />
          </Stack>
        </Stack>
        {/* End First */}
        {/* Grid */}
        <Center mb={'.5rem'}>
          <Heading as={'h3'} fontWeight={'none'} size={'2xl'}>
            Share your Look
          </Heading>
        </Center>
        <Text fontWeight={'bold'}>#YourLook</Text>
        <Grid
          h="600px"
          templateRows={{
            base: 'repeat(4, 1fr)',
            md: 'repeat(2, 1fr)'
          }}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(5, 1fr)'
          }}
          gap={4}
          w={'80%'}
          mb={'5rem'}
        >
          <GridItem
            rowSpan={{
              base: 1,
              md: 2
            }}
            colSpan={1}
            bgImage={
              'https://images.pexels.com/photos/4937224/pexels-photo-4937224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
            bgSize={'cover'}
            bgPosition={'left'}
          />
          <GridItem
            colSpan={{
              base: 1,
              md: 2
            }}
            rowSpan={{
              base: 1,
              md: 1
            }}
            bgImage={
              'https://images.pexels.com/photos/4937222/pexels-photo-4937222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
          />
          <GridItem
            colSpan={{
              base: 1,
              md: 2
            }}
            bgImage={
              'https://images.pexels.com/photos/5704410/pexels-photo-5704410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
            bgSize={'100%'}
            bgPosition={'center'}
          />
          <GridItem
            colSpan={{
              base: 1,
              md: 4
            }}
            bgImage={
              'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
            bgSize={'100%'}
            bgPosition={'center'}
          />
        </Grid>
        {/* End Grid */}
        <NewsLetter />
        {/* Best sellers  */}
        <Stack as={'section'} mt={4}>
          <Center>
            <Heading as={'h3'} size={'2xl'}>
              Best Seller
            </Heading>
          </Center>

          {loading ? (
            'Loading Data...'
          ) : (
            <GridProducts products={products.slice(0, 3)} />
          )}
        </Stack>
        {/* End Similar Products  */}
      </Flex>
      {/* <Stack
        as={'section'}
        direction={{
          base: 'column',
          md: 'row'
        }}
        align={{
          base: 'center',
          md: 'flex-start'
        }}
      >
        <GridProducts products={products} />
        <SideBar />
      </Stack> */}
    </>
  )
}

export default HomeScreen
