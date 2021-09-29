import React, { useEffect } from 'react'
import { Flex, Button, FormControl, Input } from '@chakra-ui/react'
import useCounter from '../hooks/useCounter'

const AmountCounter = ({ setAmount }: any) => {
  const {
    counter,
    setCounter,
    handlePlusAmountProduct,
    handleRestAmountProduct
  } = useCounter()

  useEffect(() => {
    setAmount(counter)
  }, [counter])

  const handleInputChange = (e: any) => {
    setCounter(e.target.value)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <Button onClick={handleRestAmountProduct} bgColor={'gray.300'}>
          {' '}
          -{' '}
        </Button>
        <FormControl>
          <Input
            type="number"
            value={counter}
            name="amountProduct"
            id="amountProduct"
            textAlign="center"
            width={'100px'}
            border={'1px solid gray'}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button onClick={handlePlusAmountProduct} bgColor={'gray.300'}>
          {' '}
          +{' '}
        </Button>
      </Flex>
    </form>
  )
}

export default AmountCounter
