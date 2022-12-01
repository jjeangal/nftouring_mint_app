import { useAccount } from 'wagmi'
import { Flex, Spacer, Text, Link, Container, Box, IconButton, HStack, Heading } from '@chakra-ui/react'
import { WalletBox } from '../components/WalletBox'
import { QuantityBox } from '../components/QuantityBox'
import { PriceBox } from '../components/PriceBox'
import { ChevronLeftIcon } from '@chakra-ui/icons'

import { Account } from '../components'
import { LicenseImage } from '../components/LicenseImage'
import { InfoBanner } from '../components/InfoBanner'

function Page() {
  const { isConnected } = useAccount()
  
  function goToWebsite() {
    location.href = "https://nftouring.io";
  }

  return (
    <>
      <Flex 
        direction="column" 
        height="100vh" 
        width="100vw" 
        bgImage="url('https://i.postimg.cc/0yBKsBMr/texture.jpg')"
        bgRepeat='no-repeat' 
        bgPosition='center center'
        bgAttachment='fixed'
        overflow='hidden'
        display='inline-flex'
        bgSize='cover' 
      >
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
        <Flex h="28%" mb='1.5%'>
          <Spacer />
          <Box w='31%'>              
            <WalletBox />
          </Box>
          <Spacer />
          <Box w='31%'>              
            <QuantityBox />
          </Box>
          <Spacer />
          <Box w='31%'>              
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