import { Flex, Text, Spacer, VStack, HStack } from "@chakra-ui/react";
import { ConnectButton } from "../buttons/ConnectButton";
import { CircleIcon } from "../icons/CircleIcon";
import { useAccount } from 'wagmi'

export function WalletBox() {

  const { isConnected } = useAccount()

  return (
    <Flex h='100%' backgroundColor={"#1F1E1E"} borderRadius='10px' direction="column">
      <VStack direction='column' alignItems='left' ml='5%' mt='5%'>
        <Text fontWeight='bold' fontSize={["sm", "md", "lg", "xl"]} color='#676767'>WALLET</Text>
        <HStack>
          {isConnected ? 
            (<>
              <CircleIcon color='#2EE240' />
              <Text fontSize={["xs", "xs", "sm"]} fontWeight="bold" color="white">CONNECTÉ</Text>
            </>) : 
            (<>
              <CircleIcon color='#D10000' />
              <Text fontSize={["xs", "xs", "sm"]} fontWeight="bold" color="white">NON CONNECTÉ</Text>
            </>) 
          }
        </HStack>
      </VStack>
      <Spacer />
      <Flex mb='5%' mr={['0', '0', '5%', '5%']} justifyContent={["center", "center", "flex-end", "flex-end"]}>
        <ConnectButton />
      </Flex>
    </Flex>
  )
}
