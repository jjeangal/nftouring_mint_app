import { Center, Image } from "@chakra-ui/react";

import License from '../assets/animatedLicense.gif';

export function LicenseImage() {
  return (
    <Center>
        <Image src={License.src} alt="Private Driver License" boxSize='800%' />
    </Center>  
  )
}
