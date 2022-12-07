import { Link } from "@chakra-ui/react"

export const WalletLink = () => {
    const msg = "BESOIN D'AIDE POUR CONNECTER UN WALLET? CONSULTEZ L'ARTICLE"
    return(
        <Link 
          href="https://nftouring.io/creer-un-portefeuille-pour-mon-nft/" 
          _hover={{
            textDecoration: "none"
          }}
          textDecoration="underline"
          fontSize={["sm", "md", "xl"]} 
          fontWeight="bold" 
          color='black' 
          isExternal
        >{msg}</Link>
    )
}