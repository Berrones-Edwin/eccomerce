import React, { useState } from 'react'
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
  Table,
  Tbody,
  Tfoot,
  Tr,
  Td,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { LISTSHIPPINGDETAILS } from '../data/shippingDetail'
import ModalAddAddress from '../components/ModalAddAddress'

const ShippingDetails = () => {
  const [details, setDetails] = useState(LISTSHIPPINGDETAILS)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleDeleteAddress = (id: number) => {
    const newListDeatils = details.filter((d) => d.id !== id)
    setDetails(newListDeatils)
  }
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Shipping Details</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text>
              Manage all the shipping address you want (work place, home
              address...) This way you won´t have to enter the shipping address
              manually each order.
            </Text>
            <Table variant="simple">
              <Tbody>
                {details.map((d) => (
                  <Tr key={d.id}>
                    <Td>
                      <Text>{d.address}</Text>
                      <Text fontWeight="bold">{d.country}</Text>
                    </Td>
                    <Td>
                      <Button bgColor="blue.300" mr={2}>
                        Change
                      </Button>
                      <Button
                        onClick={() => handleDeleteAddress(d.id)}
                        bgColor="red"
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td>
                    <Button onClick={onOpen} bgColor="green">
                      Add new adress
                    </Button>
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <ModalAddAddress
        isOpen={isOpen}
        onClose={onClose}
        details={details}
        setDetails={setDetails}
      />
    </>
  )
}

export default ShippingDetails
