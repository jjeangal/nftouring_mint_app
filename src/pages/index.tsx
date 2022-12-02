import { useAccount } from 'wagmi'
import { Flex, Spacer, Text, Link, Box, HStack } from '@chakra-ui/react'
import { WalletBox } from '../components/WalletBox'
import { QuantityBox } from '../components/QuantityBox'
import { PriceBox } from '../components/PriceBox'
import { BackButton } from '../components/buttons/BackButton'
import { LicenseImage } from '../components/LicenseImage'
import { InfoBanner } from '../components/InfoBanner'

import { Account } from '../components'


function Page() {
  const { isConnected } = useAccount()

  const sale = "Public";

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
          <BackButton />
          <Link href='https://nftouring.io' fontWeight="bold" fontSize="lg" color='white'>WEBSITE</Link>
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
          <Box w='30%'>              
            <WalletBox />
          </Box>
          <Spacer />
          <Box w='30%'>              
            <QuantityBox />
          </Box>
          <Spacer />
          <Box w='30%'>              
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