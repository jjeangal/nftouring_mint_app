import { Button, Box, VStack, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";

export function PriceBox() {
  return (
    <Flex h="100%" direction='column' textColor='white' borderRadius='10px' backgroundColor={"#1F1E1E"}>
      <VStack ml='5%' mt='5%' alignItems='left' h='40%'>
        <Text m='0'>TOTAL</Text>
        <HStack spacing='10%'>
          <Box>
            <Text m='0'>PRIX</Text>
          </Box>
          <Box >
            <Text>QUANTITÉ</Text>
          </Box>
        </HStack>
        <HStack spacing='10%'>
          <Box>
            <Text m='0'>2ETH</Text>
          </Box>
          <Box>
            <Text m='0'>2</Text>
          </Box>
        </HStack>
      </VStack>
      <Spacer />
      <Flex mb='5%' ml='5%' mr='5%'>
        <Link href={""}>VOIR LES CGV</Link>
        <Spacer />
        <Button>Mint</Button>
      </Flex>     
    </Flex>
  )
}
