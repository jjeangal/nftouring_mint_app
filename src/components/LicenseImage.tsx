import { Center, Image } from "@chakra-ui/react";

import License from '../resources/animatedLicense.gif';

export function LicenseImage() {
  return (
    <Center mb='10px'>
      <Image src={License.src} alt="Private Driver License" object-fit="cover" boxSize='800%' />
    </Center>  
  )
}
