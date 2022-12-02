import { Button, Box, Flex, HStack, Spacer, Text, Center, InputProps } from "@chakra-ui/react";
import { ETHIcon } from "../icons/ETHIcon";
import { InfoLink } from "../links/InfoLink";

interface PriceProps {
  amount: InputProps;
}

export function PriceBox({amount}: PriceProps) {
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
            <Text fontWeight="bold" fontSize="2xl" m='0'>{amount.value}ETH  <ETHIcon /></Text>
          </Box>
          <Box w="100px">
            <Text fontWeight="bold" fontSize="2xl" m='0'>{amount.value}</Text>
          </Box>
        </HStack>
      <Flex />
      <Spacer />
      <Flex mb='5%' ml='5%' mr='5%'>
        <Center verticalAlign="middle">
          <InfoLink />
        </Center>
        <Spacer />
        <Button 
          _hover={{
            background: "white", 
            textColor:"#2a2a2a"
          }} bgColor="black" 
          borderRadius="20px" 
          w="35%"
        >MINT</Button>
      </Flex>     
    </Flex>
  )
}
