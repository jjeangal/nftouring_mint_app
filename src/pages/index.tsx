import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi'
import { Flex, Spacer, Center, Link, Button, Container, Box } from '@chakra-ui/react'
import { WalletBox } from '../components/WalletBox'
import { QuantityBox } from '../components/QuantityBox'
import { PriceBox } from '../components/PriceBox'

import { Account } from '../components'

function Page() {
  const { isConnected } = useAccount()
  return (
      <Flex direction="column" backgroundColor={"red"} height="98vh" width="99vw">
        <Flex h="7%" backgroundColor={'#FB9D11'} justifyContent="center">
          <Center alignItems="center">
            <Link href="https://nftouring.io/" isExternal>BESOIN D'AIDE POUR CONNECTER UN WALLET? CONSULTEZ L'ARTICLE</Link>
          </Center>
        </Flex>
        <Container>
          <Button ml="10px" mt="10px">Go Back</Button>
        </Container>
        <Spacer />
        <Flex h="6%" justifyContent="center">
          <Center>
            <p>NFT Image</p>
          </Center>
        </Flex>        
        <Spacer />
        <Flex h="30%" w="100%">
          <WalletBox />
          <Spacer />
          <QuantityBox />
          <Spacer />
          <PriceBox />
        </Flex>
      </Flex>
  )
}

export default Page

/** {isConnected && <Account />}           <ConnectKitButton />*/