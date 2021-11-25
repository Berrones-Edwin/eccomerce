import React from 'react'
import { Stack, Heading, List, ListItem } from '@chakra-ui/react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
const SideBarSettingsUser = () => {
  const { url } = useRouteMatch()
  const { logout } = useUser()
  return (
    <Stack
      spacing={4}
      w={{
        base: '100%',
        md: '20%'
      }}
      direction={'column'}
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading>My account</Heading>
      <Heading size="md">Personal Details</Heading>
      <List>
        <ListItem>
          <Link to={url}>My profile</Link>
        </ListItem>
        <ListItem>
          <Link to={`${url}/shipping-details`}>Shipping Details</Link>
        </ListItem>
      </List>
      <Heading size="md">Order Details</Heading>
      <List>
        <ListItem>
          <Link to={`${url}/order-history`}>Order History</Link>
        </ListItem>
        <ListItem cursor="pointer" onClick={logout}>Logout</ListItem>
      </List>
    </Stack>
  )
}

export default SideBarSettingsUser
