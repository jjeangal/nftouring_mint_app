import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi'
import { Flex, Box, Spacer, Center, Link, IconButton, Button, Container } from '@chakra-ui/react'

import { Account } from '../components'

function Page() {
  const { isConnected } = useAccount()
  return (
      <Flex direction="column" backgroundColor={"red"} height="100vh" width="100vw">
        <Flex h="7%" backgroundColor={'green'} justifyContent="center">
          <Center alignItems="center">
            <Link href="https://nftouring.io/" isExternal>BESOIN D'AIDE POUR CONNECTER UN WALLET? CONSULTEZ L'ARTICLE</Link>
          </Center>
        </Flex>
        <Container>
          <Button>Go Back</Button>
        </Container>
        <Spacer />
        <Flex h="6%" justifyContent="center">
          <Center>
            <p>NFT Image</p>
          </Center>
        </Flex>        
        <Spacer />
        <Flex h="30%">
          <ConnectKitButton />
        </Flex>
      </Flex>
  )
}

export default Page

/** {isConnected && <Account />} */