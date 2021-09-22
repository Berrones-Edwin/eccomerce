import React from 'react'
import { Image, Stack, Button, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Error404Screen = () => {
  return (
    <Stack
      padding={3}
      direction={'column'}
      justify={'center'}
      align={'center'}
      minW={'100vw'}
      minH={'100vh'}
    >
      <Image width={200} heigth={200} src="/assets/error404.svg" />
      <Heading>We cant find the page</Heading>
      <Text>Unfortunely we cant find the page you are looking for.</Text>
      <Button variant={'solid'} size={'lg'} as={Link} to={'/'}>
        Return to Home
      </Button>
    </Stack>
  )
}

export default Error404Screen
