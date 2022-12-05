import { Flex, Spacer, Text, Link, Box, HStack, useNumberInput, Heading } from '@chakra-ui/react'
import { WalletBox } from '../components/boxes/WalletBox'
import { QuantityBox } from '../components/boxes/QuantityBox'
import { PriceBox } from '../components/boxes/PriceBox'
import { BackButton } from '../components/buttons/BackButton'
import { LicenseImage } from '../components/LicenseImage'
import { InfoBanner } from '../components/InfoBanner'
import config from '../contractConfig.json'

import { useContractRead } from 'wagmi'

function Page() {

  let { data: status } = useContractRead({
    address: config.address,
    abi: config.abi,
    functionName: "saleStatus"
  })

  let { data: supply } = useContractRead({
    address: config.address,
    abi: config.abi,
    functionName: "totalSupply"
  })

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 2,
      min: 0,
      max: parseInt(status as string) == 2 ? 4 : 2
    })

  function switchStatus(value: Number | unknown) { 
    switch(value) {
      case 0:
        return "SALE LOCKED";
      case 1:
        return "WHITELIST SALE"
      case 2: 
        return "PUBLIC SALE"
      default:
        return "N"
    }
  }

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const amount = getInputProps()

  const supplyReached = () => {
    let supplyText;
    if ((status as number) == 1 && supply == 800) {
      supplyText = <Heading color="white" textAlign="center" fontSize="md">PRIVATE DRIVER LICENSES WERE ALL MINTED FOR PRESALE... <br/> COME BACK TOMORROW!</Heading>
    }
    if ((status as number) == 2 && supply == 1500) {
      supplyText = <Heading color="white" fontSize="md">PRIVATE DRIVER LICENSES WERE ALL MINTED...</Heading>
    }
    return supplyText;
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
          <BackButton />
          <Link href='https://nftouring.io' fontWeight="bold" fontSize="lg" color='white'>WEBSITE</Link>
          <Box w="5px" />
          <Text fontWeight="bold" color="#94d5f2" fontSize="sm">{switchStatus(status)}</Text>
        </HStack>
        <Flex justifyContent="center">
        { supplyReached()}
        </Flex>
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
            <QuantityBox inc={inc} dec={dec} amount={amount} status={status as number}/>
          </Box>
          <Spacer />
          <Box w='30%'>              
            <PriceBox amount={amount.value} status={status as number} />
          </Box>
          <Spacer />
        </Flex>
      </Flex>
    </>
  )
}

export default Page