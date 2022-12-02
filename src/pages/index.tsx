import { Flex, Spacer, Text, Link, Box, HStack, useNumberInput, Button } from '@chakra-ui/react'
import { WalletBox } from '../components/boxes/WalletBox'
import { QuantityBox } from '../components/boxes/QuantityBox'
import { PriceBox } from '../components/boxes/PriceBox'
import { BackButton } from '../components/buttons/BackButton'
import { LicenseImage } from '../components/LicenseImage'
import { InfoBanner } from '../components/InfoBanner'

function Page() {

  const sale = "Public";

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 0,
      max: 2
    })
    
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const amount = getInputProps()

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
            <QuantityBox inc={inc} dec={dec} amount={amount} />
          </Box>
          <Spacer />
          <Box w='30%'>              
            <PriceBox amount={amount} />
          </Box>
          <Spacer />
        </Flex>
      </Flex>
    </>
  )
}

export default Page