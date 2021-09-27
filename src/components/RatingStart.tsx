import React from 'react'
import { Flex, Text, Stack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { SystemProps } from '@chakra-ui/system'

const RatingStart = ({
  text,
  rating,
  count,
  justify
}: {
  text?: string
  rating: number
  count?: number | string
  justify: SystemProps['justifyContent']
}) => {
  return (
    <Flex minW={'100%'} width={'100%'} justify={justify} align={'center'}>
      {text && <Text>{text}</Text>}
      {Array(5)
        .fill(0)
        .map((star, idx) => (
          <>
            <StarIcon
              color={idx + 1 <= Math.ceil(rating) ? 'teal.500' : 'gray.300'}
              key={idx}
            />
          </>
        ))}
      {count && (
        <Stack>
          {' '}
          <Text size={'md'}> ({count}) </Text>
        </Stack>
      )}
    </Flex>
  )
}

export default RatingStart
