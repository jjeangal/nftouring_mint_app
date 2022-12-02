import { Flex, Text, Spacer, VStack, HStack, Icon, Colors, Button } from "@chakra-ui/react";
import { ConnectKitButton } from 'connectkit'

export function WalletBox() {

  const isConnected = true;

  const CircleIcon = (color: Colors) => (
    <Icon viewBox='0 0 200 200' {...color}>
      <path
        fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </Icon>
  )

  const ConnectButton = () => {
    return (
      <ConnectKitButton.Custom>
        {({ isConnected, show, truncatedAddress, ensName }) => {
          return (
            <Button 
              bgColor="black" 
              textColor="white" 
              borderRadius="20px" 
              _hover={{
                bgColor: "white",
                textColor: "black"
              }}
              w="35%" 
              onClick={show}
            >
              {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
            </Button>
          );
        }}
      </ConnectKitButton.Custom>
    )
  }

  return (
    <Flex h='100%' backgroundColor={"#1F1E1E"} borderRadius='10px' direction="column">
      <VStack direction='column' alignItems='left' ml='5%' mt='5%'>
        <Text fontWeight='bold' fontSize='xl' color='#676767'>WALLET</Text>
        <HStack>
          {isConnected ? 
            (<>
              <CircleIcon color='#2EE240' />
              <Text fontSize='sm' fontWeight="bold" color="white">CONNECTÉ</Text>
            </>) : 
            (<>
              <CircleIcon color='red' />
              <Text fontSize='sm' fontWeight="bold" color="white">NON CONNECTÉ</Text>
            </>) 
          }
        </HStack>
      </VStack>
      <Spacer />
      <Flex mb='5%' mr='5%' justifyContent='flex-end'>
        <ConnectButton />
      </Flex>
    </Flex>
  )
}
