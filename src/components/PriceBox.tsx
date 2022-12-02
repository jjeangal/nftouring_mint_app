import { Button, Box, Flex, HStack, Spacer, Text, Link, Center, Icon } from "@chakra-ui/react";

export function PriceBox() {
  
  const EthIcon = () => (
    <Icon  w="30px" h="30px" viewBox="0 0 550 550">
      <path 
        fill="#676767"
        d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"  
      />
    </Icon>
  )
  
  return (
    <Flex h="100%" direction='column' textColor='white' borderRadius='10px' backgroundColor={"#1F1E1E"}>
        <Text mt="5%" ml="5%" fontWeight="bold" fontSize='xl' color="#676767">TOTAL</Text>
        <Spacer />
        <HStack ml="5%" spacing='10%'>
          <Box w="100px">
            <Text m='0'fontWeight="bold" fontSize='xl' color="#676767">PRIX</Text>
          </Box>
          <Box >
            <Text m='0' fontWeight="bold" fontSize='xl' color="#676767">QUANTITÉ</Text>
          </Box>
        </HStack>
        <HStack ml="5%" spacing='10%'>
          <Box w="100px">
            <Text fontWeight="bold" fontSize="2xl" m='0'>2ETH <EthIcon /></Text>
          </Box>
          <Box w="100px">
            <Text fontWeight="bold" fontSize="2xl" m='0'>2</Text>
          </Box>
        </HStack>
      <Flex />
      <Spacer />
      <Flex mb='5%' ml='5%' mr='5%'>
        <Center verticalAlign="middle">
          <Link 
            href="https://nftouring.io/licence-nfts/" 
            _hover={{
              textDecoration: "none"
            }}
            textDecoration="underline" 
            fontSize="xs" 
            fontWeight="bold" 
            color='white' 
            isExternal
          >INFO LICENSE NFT</Link>
        </Center>
        <Spacer />
        <Button _hover={{background: "white", textColor:"#2a2a2a"}} bgColor="black" borderRadius="20px" w="35%">MINT</Button>
      </Flex>     
    </Flex>
  )
}
