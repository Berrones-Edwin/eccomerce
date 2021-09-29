import React, { useState } from 'react'

const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const handlePlusAmountProduct = () => {
    setCounter(counter + 1)
  }
  const handleRestAmountProduct = () => {
    if (counter > 1) setCounter(counter - 1)
    else setCounter(1)
  }

  return {
    counter,
    setCounter,
    handlePlusAmountProduct,
    handleRestAmountProduct
  }
}

export default useCounter
