import { Center, Image } from "@chakra-ui/react";

export function LicenseImage() {
  return (
    <Center mb='10px'>
      <Image src={"./animatedLicense.gif"} alt="Private Driver License" object-fit="cover" boxSize='800%' />
    </Center>  
  )
}
