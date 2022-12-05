import { Button, Box, Flex, HStack, Spacer, Text, Center, InputProps } from "@chakra-ui/react";
import { ETHIcon } from "../icons/ETHIcon";
import { InfoLink } from "../links/InfoLink";
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'
import config from '../../contractConfig.json'
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { createProof } from "../../merkleChecks"

interface PriceProps {
  status: number;
  amount: string;
}

export function PriceBox({status, amount}: PriceProps) {

  const { address } = useAccount()
  const [proof, setProof] = useState([""])
  
  /**
  const { config: configWhitelist } = usePrepareContractWrite({
    address: config.address,
    abi: config.abi,
    functionName: 'whitelistMint',
    args: [amount, proof],
    overrides: {
      from: address,
      value: ethers.utils.parseEther(amount)
    },
    onError(error) {
      console.log('Error', error)
    }
  })
  */

  const { config: publicConfig } = usePrepareContractWrite({
    address: config.address,
    abi: config.abi,
    functionName: 'publicMint',
    args: [amount],
    overrides: {
      from: address,
      value: ethers.utils.parseEther(amount)
    },
    onSuccess(data) {
      console.log(data)
    },
  })

  const { writeAsync } = useContractWrite(publicConfig)

  const onMintClick = async () => {
    try {
      await writeAsync?.();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const userProof = createProof(address as string)
    setProof(userProof)
  }, [address])

  return (
    <Flex h="100%" direction='column' textColor='white' borderRadius='10px' backgroundColor={"#1F1E1E"}>
        <Text mt="5%" ml="5%" fontWeight="bold" fontSize='xl' color="#676767">TOTAL</Text>
        <Spacer />
        <HStack ml="5%" spacing='10%'>
          <Box w="100px">
            <Text m='0'fontWeight="bold" fontSize='xl' color="#676767">PRIX</Text>
          </Box>
          <Box >
            <Text m='0' fontWeight="bold" fontSize='xl' color="#676767">QUANTITÉ</Text>
          </Box>
        </HStack>
        <HStack ml="5%" spacing='10%'>
          <Box w="100px">
            <Text fontWeight="bold" fontSize="2xl" m='0'>{amount}ETH  <ETHIcon /></Text>
          </Box>
          <Box w="100px">
            <Text fontWeight="bold" fontSize="2xl" m='0'>{amount}</Text>
          </Box>
        </HStack>
      <Flex />
      <Spacer />
      <Flex mb='5%' ml='5%' mr='5%'>
        <Center verticalAlign="middle">
          <InfoLink />
        </Center>
        <Spacer />
        <Button 
          _hover={{
            background: "white", 
            textColor:"#2a2a2a"
          }} bgColor="black" 
          borderRadius="20px" 
          w="35%"
          disabled={status == 0}
          onClick={onMintClick}
        >MINT</Button>
      </Flex>     
    </Flex>
  )
}
