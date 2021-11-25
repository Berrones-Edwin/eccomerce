import React, { useState } from 'react'
import {
  Flex,
  FormControl,
  useToast,
  Input,
  FormLabel,
  Button
} from '@chakra-ui/react'

const INITIALFORM = {
  newPassword: '',
  currentPassword: '',
  repeatPassword: ''
}

const FormSettingsUserPassword = () => {
  const [form, setForm] = useState(INITIALFORM)
  const toast = useToast()
  const handleInputChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (
      form.newPassword === form.repeatPassword &&
      form.newPassword !== form.currentPassword
    ) {
      toast({
        title: 'Password Updated.',
        description: "We've updated your password for you.",
        status: 'success',
        duration: 3000,
        isClosable: true
      })
    } else {
      toast({
        title: 'Error password Updated.',
        description: "We've not updated your password.",
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl w={'650px'} isRequired id="currentPassword">
        <FormLabel>Current Password</FormLabel>
        <Input
          name="currentPassword"
          onChange={handleInputChange}
          type="password"
        />
      </FormControl>
      <Flex
        direction={{
          base: 'column',
          md: 'row'
        }}
      >
        <FormControl mr={'0.5rem'} w={'300px'} isRequired id="newPassword">
          <FormLabel>New Password</FormLabel>
          <Input
            name="newPassword"
            onChange={handleInputChange}
            type="password"
          />
        </FormControl>
        <FormControl mb={'1rem'} w={'300px'} isRequired id="repeatPassword">
          <FormLabel>Repeat Password</FormLabel>
          <Input
            name="repeatPassword"
            onChange={handleInputChange}
            type="password"
          />
        </FormControl>
      </Flex>
      <Button type="submit" mb={'1rem'} bgColor="green">
        Update password
      </Button>
    </form>
  )
}

export default FormSettingsUserPassword
