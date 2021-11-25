import React from 'react'
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
  Link
} from '@chakra-ui/react'
import FormSettingsUser from '../components/FormSettingsUser'
import FormSettingsUserPassword from '../components/FormSettingsUserPassword'

const ProfileScreen = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Personal Data</Tab>
        <Tab>Password Change</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Text>
            Feel free to edit any of your details below so your account is
            always up to date
          </Text>
          <FormSettingsUser />
          <Text>
            At brand name, we attach great importance to privacy issues and are
            commited to protecting the personal data of our user. Learn more
            about how we care and use oyour personale data in the{' '}
            <Text as={Link} color="green">
              Privacy Policy
            </Text>
          </Text>
        </TabPanel>
        <TabPanel>
          <Text>
            If you want to change the password to access your account, enter the
            following information: Your current email address is
            john.doe@example.com
          </Text>
          <FormSettingsUserPassword />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default ProfileScreen
