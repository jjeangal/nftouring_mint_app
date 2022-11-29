import { Flex, Text, Spacer } from "@chakra-ui/react";
import { ConnectKitButton } from 'connectkit'

export function WalletBox() {

  return (
    <Flex w="31%" m={10} backgroundColor={"#1F1E1E"} direction="column">
      <Text mt='20px' ml='20px' color='white'>WALLET</Text>
      <Text ml='20px' color='white'>POUR COMMENCER, <br/>CONNECTEZ VOTRE WALLET</Text>
      <Spacer />
      <Flex mb='20px' mr='20px' justifyContent='flex-end'>
        <ConnectKitButton />
      </Flex>
    </Flex>
  )
}
