import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function BackButton() {
    
    function goToWebsite() {
        location.href = "https://nftouring.io";
    }

    return (
        <IconButton 
        onClick={() => goToWebsite()} 
        color='white' 
        border='none'
        background='none' 
        _hover={{
          filter: "brightness(150%)"
        }}
        aria-label='Reach website' 
        icon={<ChevronLeftIcon h='45px' w='45px' />
        } />
    )
}