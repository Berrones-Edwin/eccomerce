import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/alert'
import { CloseButton } from '@chakra-ui/close-button'

type STATUS = 'info' | 'warning' | 'success' | 'error'
const CustomAlert = ({
  title,
  description,
  status,
  as
}: {
  title: string
  description: string
  status: STATUS
  as: any
}) => {
  return (
    <Alert status={status} as={as}>
      <AlertIcon />
      <AlertTitle mr={2}>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  )
}

export default CustomAlert
