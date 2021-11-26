import React from 'react'
import { Stack, Image, Heading, Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
const ServerDownScreen = () => {
  const { replace } = useHistory()

  const handleTryAgain = () => {
    replace({
      pathname: '/'
    })
  }

  return (
    <Stack
      minH={'100vh'}
      minW={'100vw'}
      direction={'column'}
      justify={'center'}
      align={'center'}
      spacing={3}
    >
      <Image w={'500px'} src="/server_down.svg" />
      <Heading size={'lg'}>Upps. An Error ocurred</Heading>
      <Button onClick={handleTryAgain}>Try again!</Button>
    </Stack>
  )
}

export default ServerDownScreen
