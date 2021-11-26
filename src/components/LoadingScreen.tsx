import React from 'react'
import { Stack } from '@chakra-ui/react'
import Loader from './Loader/Loader'

const LoadingScreen = () => {
  return (
    <Stack
      minH={'100vh'}
      minW={'100vw'}
      direction={'row'}
      justify={'center'}
      align={'center'}
    >
      <Loader />
    </Stack>
  )
}

export default LoadingScreen
