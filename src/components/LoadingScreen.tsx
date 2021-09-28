import React from 'react'
import { Stack, Text } from '@chakra-ui/react'
import Loader from './Loader/Loader'

const LoadingScreen = () => {
  return (
    <Stack minH={'100vh'} justify={'center'} align={'center'}>
      <Loader />
      <Text> Loading Data...</Text>
    </Stack>
  )
}

export default LoadingScreen
