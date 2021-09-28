import React from 'react'
import { Stack, Heading, Button, Checkbox } from '@chakra-ui/react'
import { categories } from '../data/categories'
const SideBar = () => {
  return (
    <Stack
      minW={'250px'}
      minH={'300px'}
      maxH={'300px'}
      as={'aside'}
      align={'center'}
    >
      <Heading as={'h3'} size={'md'} mb={'1rem'}>
        Categories
      </Heading>
      <Stack spacing={3} direction="column">
        <Checkbox defaultIsChecked colorScheme="green">
          All
        </Checkbox>
        {categories.map((category) => (
          <Checkbox key={category.id} colorScheme="green">
            {category.name}
          </Checkbox>
        ))}
      </Stack>
      <hr />
      <Heading as={'h3'} size={'md'} mb={'1rem'}>
        Colors
      </Heading>
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
      <hr />
      <Heading as={'h3'} size={'md'} mb={'1rem'}>
        Size
      </Heading>
      <Stack spacing={3} direction="column">
        <Checkbox colorScheme="green" defaultIsChecked>
          All Sizes
        </Checkbox>
        <Checkbox colorScheme="green">SM</Checkbox>
        <Checkbox colorScheme="green">MD</Checkbox>
        <Checkbox colorScheme="green">LG</Checkbox>
      </Stack>
      <hr />
      <Heading as={'h3'} size={'md'} mb={'1rem'}>
        Price
      </Heading>
      <Stack spacing={3} direction="column">
        <Checkbox colorScheme="green" defaultIsChecked>
          All Prices
        </Checkbox>
        <Checkbox colorScheme="green">$10</Checkbox>
        <Checkbox colorScheme="green">$30</Checkbox>
        <Checkbox colorScheme="green">$50</Checkbox>
        <Checkbox colorScheme="green">$70</Checkbox>
      </Stack>
    </Stack>
  )
}

export default SideBar
