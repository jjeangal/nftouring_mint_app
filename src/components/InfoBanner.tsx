import { Center, Flex, Link } from "@chakra-ui/react";

export function InfoBanner() {
  return (
    <Flex h="7%" backgroundColor={'#FB9D11'} justifyContent="center">
      <Center alignItems="center">
        <Link href="https://nftouring.io/creer-un-portefeuille-pour-mon-nft/" fontWeight="bold" color='black' isExternal>BESOIN D'AIDE POUR CONNECTER UN WALLET? CONSULTEZ L'ARTICLE</Link>
      </Center>
    </Flex>
  )
}
