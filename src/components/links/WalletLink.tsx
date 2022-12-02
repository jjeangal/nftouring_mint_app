import { Link } from "@chakra-ui/react"

export const WalletLink = () => {
    return(
        <Link 
          href="https://nftouring.io/creer-un-portefeuille-pour-mon-nft/" 
          _hover={{
            textDecoration: "none"
          }}
          textDecoration="underline" 
          fontWeight="bold" 
          color='black' 
          isExternal
        >BESOIN D'AIDE POUR CONNECTER UN WALLET? CONSULTEZ L'ARTICLE</Link>
    )
}