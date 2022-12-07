import { 
  Flex, 
  Text, 
  Spacer, 
  VStack, 
  HStack, 
  Button, 
  Input, 
  Center, 
  ButtonProps, 
  InputProps 
} from "@chakra-ui/react";

interface QuantityProps {
  inc: ButtonProps;
  dec: ButtonProps;
  amount: InputProps;
  status: number;
}

export function QuantityBox ({inc, dec, amount, status} : QuantityProps) {
  return (
    <Flex h="100%" backgroundColor={"#1F1E1E"} borderRadius='10px' direction="column" textColor="white">
      <VStack ml='5%' alignItems='left' mt='5%'>
        <Text fontWeight='bold' fontSize={["sm", "md", "lg", "xl"]} color="#676767">QUANTITÉ</Text>
        <Text fontWeight="bold" fontSize={["xs", "xs", "md", "xl"]}>SELECTIONNEZ LE NOMBRE <br/> DE DRIVER LICENSES</Text>
      </VStack>
      
      <Flex mb='5%' ml='5%' mr='5%' direction={["column", "column", "row", "row"]} mt="auto" alignItems="center">
        <Center mb={["5%", "5%", "0", "0"]}>
          {
            status == 2?
              <Text fontSize={["xs", "sm", "md"]} fontWeight="bold">MAX MINT: {4}</Text> :
              <Text fontSize={["xs", "xs", "sm", "md"]} fontWeight="bold">MAX MINT: {2}</Text>  
          }
        </Center>
        <Spacer />
        <HStack w={["100%", "90%", "60%", "50%", "40%"]} spacing="0">
          <Button w="20px" fontSize="sm" _hover={{background:"white",textColor:"#2a2a2a"}} borderRadius="20px 0 0 20px" bgColor="black" {...dec}>-</Button>
          <Input focusBorderColor="transparent" bgColor="#2a2a2a" borderRadius="0" border="none" textAlign="center" {...amount} />
          <Button w="20px" fontSize="sm" _hover={{background:"white",textColor:"#2a2a2a"}} borderRadius="0 20px 20px 0" bgColor="black" {...inc}>+</Button>
        </HStack>
      </Flex>
    </Flex>
  )
}
