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
  firstname: '',
  lastname: '',
  email: ''
}

const FormSettingsUser = () => {
  const [form, setForm] = useState(INITIALFORM)
  const toast = useToast()
  const handleInputChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()

    toast({
      title: 'Settings Updated.',
      description: "We've updated your data for you.",
      status: 'success',
      duration: 3000,
      isClosable: true
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        direction={{
          base: 'column',
          md: 'row'
        }}
      >
        <FormControl w={'300px'} mr={'0.5rem'} isRequired id="firstname">
          <FormLabel>First Name</FormLabel>
          <Input
            onChange={handleInputChange}
            autoComplete="off"
            type="text"
            name="firstname"
          />
        </FormControl>
        <FormControl w={'300px'} isRequired id="lastname">
          <FormLabel>Last Name</FormLabel>
          <Input
            onChange={handleInputChange}
            name="lastname"
            autoComplete="off"
            type="text"
          />
        </FormControl>
      </Flex>
      <FormControl mb={'1rem'} w={'650px'} isRequired id="email">
        <FormLabel>Email address</FormLabel>
        <Input
          onChange={handleInputChange}
          autoComplete="off"
          type="email"
          name="email"
        />
      </FormControl>
      <Button mb={'1rem'} bgColor="green" type="submit">
        Update personal data
      </Button>
    </form>
  )
}

export default FormSettingsUser
