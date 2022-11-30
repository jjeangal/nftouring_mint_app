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
      <VStack ml='5%' direction='column' alignItems='left' mt='3%'>
        <Text>QUANTITÉ</Text>
        <Text>SELECTIONNEZ LE <br/> NOMBRE DE DRIVER <br/> LICENCE</Text>
      </VStack>
      <Spacer />
      <Flex mb='5%' ml='5%' mr='5%'>
        <Text m='0'>LIMITE MAX: </Text>
        <Spacer />
        <HStack >
          <Button {...dec}>-</Button>
          <Input {...input} />
          <Button {...inc}>+</Button>
        </HStack>
      </Flex>
    </Flex>
  )
}
