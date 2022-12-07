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
                fontSize={["xs", "xs", "sm"]} 
                borderRadius="20px" 
                _hover={{
                  bgColor: "white",
                  textColor: "#2A2A2A"
                }}
                w={["fit-content", "fit-content", "fit-content", "35%"]} 
                onClick={show}
              >
                {isConnected ? ensName ?? truncatedAddress : "CONNECT"}
              </Button>
            );
          }}
        </ConnectKitButton.Custom>
      )
}

