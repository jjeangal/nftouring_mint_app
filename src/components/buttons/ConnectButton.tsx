import { Button } from "@chakra-ui/react";
import { ConnectKitButton } from "connectkit";

export function ConnectButton() {
    return (
        <ConnectKitButton.Custom>
          {({ isConnected, show, truncatedAddress, ensName }) => {
            return (
              <Button 
                bgColor="black" 
                textColor="white"
                fontSize="sm" 
                borderRadius="20px" 
                _hover={{
                  bgColor: "white",
                  textColor: "#2A2A2A"
                }}
                w="35%" 
                onClick={show}
              >
                {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
              </Button>
            );
          }}
        </ConnectKitButton.Custom>
      )
}

