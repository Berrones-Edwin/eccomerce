import React from 'react'
import { Stack, Heading, Button } from '@chakra-ui/react'
import { categories } from '../data/categories'
const SideBar = () => {
  return (
    <Stack
      minW={'300px'}
      minH={'300px'}
      maxH={'300px'}
      as={'aside'}
      align={'center'}
    >
      <Heading as={'h3'} size={'md'}>
        Categories
      </Heading>
      <Stack
        spacing={4}
        direction={{
          base: 'row',
          md: 'column'
        }}
        wrap={'wrap'}
        justify={'space-around'}
        align={'center'}
      >
        {categories.map((category) => (
          <Button key={category.id}>{category.name}</Button>
        ))}
      </Stack>
    </Stack>
  )
}

export default SideBar
