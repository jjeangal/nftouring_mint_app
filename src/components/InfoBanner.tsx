import { Center, Flex } from "@chakra-ui/react";
import { WalletLink } from "./links/WalletLink";

export function InfoBanner() {
  return (
    <Flex h="7%" backgroundColor={'#FB9D11'} justifyContent="center">
      <Center alignItems="center">
        <WalletLink />
      </Center>
    </Flex>
  )
}
