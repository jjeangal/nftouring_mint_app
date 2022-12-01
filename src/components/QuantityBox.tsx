import { Flex, Text, Spacer, VStack, useNumberInput, HStack, Button, Input, Center } from "@chakra-ui/react";

export function QuantityBox() {

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 0,
      max: 2
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <Flex h="100%" backgroundColor={"#1F1E1E"} borderRadius='10px' direction="column" textColor="white">
      <VStack ml='5%' alignItems='left' mt='5%'>
        <Text fontWeight='bold' fontSize='xl' color="#676767">QUANTITÉ</Text>
        <Text fontWeight="bold" fontSize="xl">SELECTIONNEZ LE NOMBRE <br/> DE DRIVER LICENCE</Text>
      </VStack>
      <Spacer />
      <Flex mb='5%' ml='5%' mr='5%'>
        <Center verticalAlign="middle">
          <Text fontSize="sm" fontWeight="bold">LIMITE MAX: </Text>          
        </Center>
        <Spacer />
        <HStack w="40%" alignContent="right" spacing="0">
          <Button bgColor="black" {...dec}>-</Button>
          <Input focusBorderColor="black" bgColor="#2a2a2a" borderRadius="0" border="none" textAlign="center" {...input} />
          <Button bgColor="black" {...inc}>+</Button>
        </HStack>
      </Flex>
    </Flex>
  )
}
