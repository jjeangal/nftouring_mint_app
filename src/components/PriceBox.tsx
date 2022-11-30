import { Button, Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";

export function PriceBox() {
  return (
    <Flex h="100%" direction='column' textColor='white' borderRadius='10px' backgroundColor={"#1F1E1E"}>
      <Flex ml='5%' mt='3%' direction='column'>
        <Text>TOTAL</Text>
        <HStack spacing='10%'>
          <Box>
            <Text>PRIX</Text>
          </Box>
          <Box>
            <Text>QUANTITÉ</Text>
          </Box>
        </HStack>
        <HStack spacing='10%'>
          <Box>
            <Text>2ETH</Text>
          </Box>
          <Box>
            <Text>2</Text>
          </Box>
        </HStack>
      </Flex>
      <Spacer />
      <Flex mb='5%' ml='5%' mr='5%'>
        <Link href={""}>VOIR LES CGV</Link>
        <Spacer />
        <Button>Mint</Button>
      </Flex>     
    </Flex>
  )
}
