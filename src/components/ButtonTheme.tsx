import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ButtonTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      isRound={true}
      icon={colorMode === 'dark' ? <FaMoon /> : <FaSun />}
      size="md"
      alignSelf="flex-end"
      onClick={toggleColorMode}
      aria-label="button"
    />
  )
}

export default ButtonTheme
