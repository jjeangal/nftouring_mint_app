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
        <Text fontWeight="bold" fontSize={["xs", "sm", "md", "lg", "xl"]}>SELECTIONNEZ LE NOMBRE <br/> DE DRIVER LICENCE</Text>
      </VStack>
      <Spacer />
      <Flex mb='5%' ml='5%' mr='5%'>
        <Center verticalAlign="middle">
          {
            status == 2?
              <Text fontSize="sm" fontWeight="bold">PUBLIC SALE MAX: {4}</Text> :
              <Text fontSize="sm" fontWeight="bold">PRIVATE SALE MAX: {2}</Text>  
          }
        </Center>
        <Spacer />
        <HStack w="35%" alignContent="right" spacing="0">
          <Button _hover={{background:"white",textColor:"#2a2a2a"}} borderRadius="20px 0 0 20px" bgColor="black" {...dec}>-</Button>
          <Input focusBorderColor="transparent" bgColor="#2a2a2a" borderRadius="0" m="0" border="none" textAlign="center" {...amount} />
          <Button _hover={{background:"white",textColor:"#2a2a2a"}} borderRadius="0 20px 20px 0" bgColor="black" {...inc}>+</Button>
        </HStack>
      </Flex>
    </Flex>
  )
}
