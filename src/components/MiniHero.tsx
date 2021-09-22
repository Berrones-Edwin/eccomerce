import React from 'react'
import { Stack, Text, Heading, Image, Button } from '@chakra-ui/react'

const MiniHero = ({
  firstText,
  title,
  secondText,
  buttonText,
  srcImage
}: {
  firstText: string
  title: string
  secondText?: string
  buttonText?: string
  srcImage: string
}) => {
  return (
    <Stack
      as={'section'}
      direction={{
        base: 'row',
        md: 'column'
      }}
      width={{
        base: '100%',
        md: '100%'
      }}
      height={'100%'}
      align={'center'}
    >
      <Stack
        width={{
          base: '50%',
          md: '100%'
        }}
        padding={2}
        justify={'center'}
        align={'center'}
      >
        <Text>{firstText}</Text>
        <Heading size={'md'}>{title}</Heading>
        {secondText && <Text>{secondText}</Text>}
        {buttonText && <Button>{buttonText}</Button>}
      </Stack>
      <Stack
        width={{
          base: '50%',
          md: '100%'
        }}
        height={'100%'}
        direction={'row'}
        justify={'center'}
      >
        <Image width={200} heigth={200} src={srcImage} />
      </Stack>
    </Stack>
  )
}

export default MiniHero
