import { Link } from "@chakra-ui/react"

export const InfoLink = () => {
    return(
        <Link 
        href="https://nftouring.io/licence-nfts/" 
        _hover={{
          textDecoration: "none"
        }}
        textDecoration="underline" 
        fontSize="xs" 
        fontWeight="bold" 
        color='white' 
        isExternal
      >INFO LICENSE NFT</Link>
    )
}