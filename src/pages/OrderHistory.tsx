import React from 'react'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Heading,
  Image,
  Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const OrderHistory = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Order History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Stack
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            h={'100%'}
            spacing={3}
          >
            <Image width={'300'} height={'300'} src={'/empty-cart.svg'} />
            <Heading size={'lg'}>You do not have orders yet</Heading>
            <Button as={Link} to="/">
              Buy now!
            </Button>
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default OrderHistory
