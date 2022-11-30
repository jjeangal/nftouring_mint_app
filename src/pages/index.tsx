import { useAccount } from 'wagmi'
import { Flex, Spacer, Center, Link, Button, Container, Box } from '@chakra-ui/react'
import { WalletBox } from '../components/WalletBox'
import { QuantityBox } from '../components/QuantityBox'
import { PriceBox } from '../components/PriceBox'

import { Account } from '../components'
import { LicenseImage } from '../components/LicenseImage'
import { InfoBanner } from '../components/InfoBanner'

function Page() {
  const { isConnected } = useAccount()
  return (
    <>
      <Flex direction="column" height="97vh" width="99vw">
        <InfoBanner />
        <Container>
          <Button ml="10px" mt="10px">Go Back</Button>
        </Container>
        <Spacer />
        <Flex h="6%" justifyContent="center">
          <LicenseImage />
        </Flex>        
        <Spacer />
        <Flex h="30%" w="100%">
          <Box w='31%' h='100%'>              
            <WalletBox />
          </Box>
          <Spacer />
          <Box w='31%' h='100%'>              
            <QuantityBox />
          </Box>
          <Spacer />
          <Box w='31%' h='100%'>              
            <PriceBox />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Page

/** {isConnected && <Account />}          */