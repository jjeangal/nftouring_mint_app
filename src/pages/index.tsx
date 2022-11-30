import { useAccount } from 'wagmi'
import { Flex, Spacer, Text, Link, Container, Box, IconButton, HStack } from '@chakra-ui/react'
import { WalletBox } from '../components/WalletBox'
import { QuantityBox } from '../components/QuantityBox'
import { PriceBox } from '../components/PriceBox'
import { ChevronLeftIcon } from '@chakra-ui/icons'

import { Account } from '../components'
import { LicenseImage } from '../components/LicenseImage'
import { InfoBanner } from '../components/InfoBanner'
import { SP } from 'next/dist/shared/lib/utils'

function Page() {
  const { isConnected } = useAccount()
  
  function goToWebsite() {
    location.href = "https://nftouring.io";
  }
  
  return (
    <>
      <Flex direction="column" height="97vh" width="99vw">
        <InfoBanner />
        <HStack ml="1%" mt="1%" textColor='white'>
          <IconButton 
            onClick={() => goToWebsite()} 
            color='white' 
            border='none'
            background='none' 
            aria-label='Reach website' 
            icon={<ChevronLeftIcon h='45px' w='45px' />
            } />
          <Link href='https://nftouring.io' color='white'>WEBSITE</Link>
          <Box w='2%' />
            <Text>PRESALE / PUBLIC SALE</Text>
        </HStack>
        <Spacer />
        <Flex h="7%" justifyContent="center">
          <LicenseImage />
        </Flex>        
        <Spacer />
        <Flex h="28%" w="100%">
          <Spacer />
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
          <Spacer />
        </Flex>
      </Flex>
    </>
  )
}

export default Page

/** {isConnected && <Account />}          */