import { Button, Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";

export function PriceBox() {
  return (
    <Flex w="31%" direction='column' m={10} textColor='white' backgroundColor={"#1F1E1E"}>
      <Text>TOTAL</Text>
      <Spacer />
      <Flex direction='column'>
        <HStack spacing='30px'>
          <Box>
            <Text>PRIX</Text>
          </Box>
          <Box>
            <Text>QUANTITE</Text>
          </Box>
        </HStack>
        <HStack spacing='30px'>
          <Box>
            <Text>2ETH</Text>
          </Box>
          <Box>
            <Text>2</Text>
          </Box>
        </HStack>
      </Flex>
      <Spacer />
      <Flex>
        <Link href={""}>VOIR LES CGV</Link>
        <Spacer />
        <Button>Mint</Button>
      </Flex>     
    </Flex>
  )
}
