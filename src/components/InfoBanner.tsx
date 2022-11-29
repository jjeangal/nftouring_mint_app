import { Center, Flex, Link } from "@chakra-ui/react";

export function InfoBanner() {
  return (
    <Flex h="7%" backgroundColor={'#FB9D11'} justifyContent="center">
      <Center alignItems="center">
        <Link href="https://nftouring.io/" color='black' isExternal>BESOIN D'AIDE POUR CONNECTER UN WALLET? CONSULTEZ L'ARTICLE</Link>
      </Center>
    </Flex>
  )
}
