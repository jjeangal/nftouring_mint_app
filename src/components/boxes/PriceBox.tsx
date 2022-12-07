import { Button, Box, Flex, HStack, Spacer, Text, Center, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ethers } from "ethers";
import { ETHIcon } from "../icons/ETHIcon";
import { InfoLink } from "../links/InfoLink";
import { createProof } from "../../merkleChecks"
import { parseErrorMsg } from "../../parseErrorMsg"
import config from '../../contractConfig.json'

interface PriceProps {
  status: number;
  amount: string;
}

export function PriceBox({status, amount}: PriceProps) {
  const { address } = useAccount()
  const [proof, setProof] = useState([""])
  const toast = useToast()

  const { config: whitelistConfig, isError: isErrorWhitelist, error: errorWhitelist } = usePrepareContractWrite({
    address: config.address,
    abi: config.abi,
    functionName: 'whitelistMint',
    args: [amount, proof],
    overrides: {
      from: address,
      value: ethers.utils.parseEther(amount)
    }
  })

  const { config: publicConfig, isError: isErrorPublic, error: errorPublic  } = usePrepareContractWrite({
    address: config.address,
    abi: config.abi,
    functionName: 'publicMint',
    args: [amount],
    overrides: {
      from: address,
      value: ethers.utils.parseEther(amount)
    }
  })

  const { 
    writeAsync: writeWhitelist, 
    isLoading: whitelistLoading,
    isSuccess: whitelistSuccess
  } = useContractWrite(whitelistConfig as any)

  const {
    writeAsync: writePublic, 
    isLoading: publicLoading,
    isSuccess: publicSuccess
  } = useContractWrite(publicConfig as any)

  const onMintClick = async () => {
    try {
      if (status == 1) {
        await writeWhitelist?.();
        if(isErrorWhitelist) {
          toast({
            title: 'Minting not possible.',
            description: parseErrorMsg(errorWhitelist?.message as string),
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
      } 
      if(status == 2) {
        await writePublic?.();
        if(isErrorPublic) {
          toast({
            title: 'Minting not possible.',
            description: parseErrorMsg(errorPublic?.message as string),
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const infoToast = () => {
    toast({
      title: 'Patientez juste un peu!',
      description: "Votre portefeuille valide la transaction.",
      status: 'info',
      duration: 8000,
      isClosable: true,
    })
  }

  useEffect(() => {
    const userProof = createProof(address as string)
    setProof(userProof)
  }, [address])

  useEffect(() => {
    if(publicSuccess == true || whitelistSuccess == true) {
      infoToast()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicSuccess, whitelistSuccess])

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
          fontSize="sm"
          w="35%"
          disabled={status == 0 || (status == 1 && whitelistLoading) || (status == 2 && publicLoading) || (parseInt(amount) == 0)}
          onClick={onMintClick}
        >MINT / ACHETER</Button>
      </Flex>     
    </Flex>
  )
}
