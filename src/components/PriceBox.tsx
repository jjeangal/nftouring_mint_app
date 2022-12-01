import { Button, Box, Flex, HStack, Spacer, Text, Link, Center } from "@chakra-ui/react";

export function PriceBox() {
  return (
    <Flex h="100%" direction='column' textColor='white' borderRadius='10px' backgroundColor={"#1F1E1E"}>
        <Text mt="5%" ml="5%" fontWeight="bold" fontSize='xl' color="#676767">TOTAL</Text>
        <Spacer />
        <HStack ml="5%" spacing='10%'>
          <Box>
            <Text m='0'fontWeight="bold" fontSize='xl' color="#676767">PRIX</Text>
          </Box>
          <Box >
            <Text m='0' fontWeight="bold" fontSize='xl' color="#676767">QUANTITÉ</Text>
          </Box>
        </HStack>
        <HStack ml="5%" spacing='10%'>
          <Box>
            <Text fontWeight="bold" fontSize="2xl" m='0'>2ETH</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="2xl" m='0'>2</Text>
          </Box>
        </HStack>
      <Flex />
      <Spacer />
      <Flex mb='5%' ml='5%' mr='5%'>
        <Center verticalAlign="middle">
          <Link href="" fontSize="xs" fontWeight="bold" color='white' isExternal>VOIR LES CGV</Link>
        </Center>
        <Spacer />
        <Button>Mint</Button>
      </Flex>     
    </Flex>
  )
}
