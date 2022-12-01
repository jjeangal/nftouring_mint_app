import { Flex, Text, Spacer, VStack, useNumberInput, HStack, Button, Input } from "@chakra-ui/react";

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
        <Text fontSize="xl">SELECTIONNEZ LE NOMBRE <br/> DE DRIVER LICENCE</Text>
      </VStack>
      <Spacer />
      <Flex mb='5%' ml='5%' mr='5%'>
        <Text fontSize="sm" fontWeight="bold">LIMITE MAX: </Text>
        <Spacer />
        <HStack w="40%" alignContent="right" >
          <Button {...dec}>-</Button>
          <Input {...input} />
          <Button {...inc}>+</Button>
        </HStack>
      </Flex>
    </Flex>
  )
}
