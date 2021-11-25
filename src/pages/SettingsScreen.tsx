import React from 'react'
import { Stack, Flex } from '@chakra-ui/react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import ProfileScreen from './ProfileScreen'
import ShippingDetails from './ShippingDetails'
import SideBarSettingsUser from '../components/SideBarSettingsUser'
import OrderHistory from './OrderHistory'
const SettingsScreen = () => {
  const { path } = useRouteMatch()

  return (
    <>
      <Flex
        direction={{
          base: 'column',
          md: 'row'
        }}
        justifyContent="space-around"
        alignItems="flex-start"
        padding={'1rem'}
      >
        <SideBarSettingsUser />
        <Stack
          w={{
            base: '100%',
            md: '80%'
          }}
          h={'100vh'}
        >
          <Switch>
            <Route exact path={path} component={ProfileScreen} />
            <Route
              exact
              path={`${path}/shipping-details`}
              component={ShippingDetails}
            />
            <Route
              exact
              path={`${path}/order-history`}
              component={OrderHistory}
            />
          </Switch>
        </Stack>
      </Flex>
    </>
  )
}

export default SettingsScreen
