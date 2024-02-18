import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router';
import {
     Box, Button, ChakraProvider, Text, useMediaQuery, Select, Modal,
    ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton, useDisclosure, Input,Image,useToast, Spacer
} from '@chakra-ui/react'
import {
  useConnect,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import contractInterface from '../abi/starportal-abi.json';

import { ethers } from 'ethers';
import { useState } from 'react'
import { TriangleDownIcon,RepeatIcon } from '@chakra-ui/icons'
function Home() {
  const router = useRouter();
  const [amount, setAmount] = useState('0'); // Amount to send
  const { isConnected } = useConnect();

  const contractConfigEthSepolia = {
    addressOrName: '0xc817EB961d6A883bfF0AB60A25819e6b1F7D94dc',
    contractInterface: contractInterface,
  };

  const contractConfigArbSepolia = {
    addressOrName: '0x38149AA01AF04178b9e481D8221aaEa90ad8f722',
    contractInterface: contractInterface, // Make sure this is defined or imported
  };
  const toast = useToast()
  const {
    data: depositDataEthSepolia,
    writeAsync: depositEthSepolia,
    isLoading: isDepositLoadingEthSepolia,
    isSuccess: isDepositStartedEthSepolia, 
  } = useContractWrite(contractConfigEthSepolia, 'deposit');
   const {
    data: depositDataArbSepolia,
    writeAsync: depositArbSepolia,
    isLoading: isDepositLoadingArbSepolia,
    isSuccess: isDepositStartedArbSepolia,
  } = useContractWrite(contractConfigArbSepolia, 'deposit');
  const networkToContractAddressMap = {
    eth_sepolia: '0xc817EB961d6A883bfF0AB60A25819e6b1F7D94dc',
    arb_sepolia: '0x38149AA01AF04178b9e481D8221aaEa90ad8f722',
    Rinkeby: '0xYourContractAddressForRinkeby',
    Goerli: '0xYourContractAddressForGoerli',
    Optimism: '0xYourContractAddressForOptimism',
    Polygon: '0xYourContractAddressForPolygon',
  };
  const networkToChainIdMap = {
    eth_sepolia: 1001,
    arb_sepolia: 1002,
    Rinkeby: 1004,
    Goerli: 1004,
    Optimism: 1005,
    Polygon: 1006
  };
  const networkChaintologo = new Map([
    ["eth_sepolia","/logo_eth_sepolia.png"],
    ["arb_sepolia","/logo_arb_sepolia.png"],
    ["Rinkeby","/logo_Rinkeby.png"],
    ["Goerli","/logo_Goerli.png"],
    ["Optimism","/logo_Optimism.png"],
    ["Polygon","/logo_Polygon.png"]])
 const networks = Object.keys(networkToContractAddressMap); // Predefined list of networks\

 const [selectedSrcNetwork, setSelectedSrcNetwork] = useState(networks[0]); // Default Source network
 const [selectedDstNetwork, setSelectedDstNetwork] = useState(networks[1]); // Default Destination network
  const handleSend = async () => {
    if (selectedSrcNetwork == 'eth_sepolia') {
      router.push(`/transmission?TxHash=${depositDataArbSepolia}&amount=${amount}&amtSrc=0&from=${selectedSrcNetwork}&to=${selectedDstNetwork}`);
      await depositEthSepolia({args : [networkToChainIdMap[selectedDstNetwork as keyof typeof networkToChainIdMap]],
         overrides: { value: ethers.utils.parseEther(amount)
         }, }).then((e)=>{
          console.log(e.hash);
          router.push(`/transmission?TxHash=${depositDataEthSepolia}&amount=${amount}&amtSrc=1&from=${selectedSrcNetwork}&to=${selectedDstNetwork}`);
         }).catch((e) => {
          console.log(e);
          // toast({
          //   title: 'Transaction failed please try again',
          //   status: 'error',
          //   isClosable: true,
          // })
          router.push('/Home');
         });
         console.log(depositDataEthSepolia);
    } else if (selectedSrcNetwork == 'arb_sepolia') {

      router.push(`/transmission?TxHash=${depositDataEthSepolia}&amount=${amount}&amtSrc=0&from=${selectedSrcNetwork}&to=${selectedDstNetwork}`);
      await depositEthSepolia({args : [networkToChainIdMap[selectedDstNetwork as keyof typeof networkToChainIdMap]],
         overrides: { value: ethers.utils.parseEther(amount)
         }, }).then((e)=>{
          router.push(`/transmission?srcTxHash=24244242&dstTxHash=9832038&amount=${amount}&amtSrc=1&from=${selectedSrcNetwork}&to=${selectedDstNetwork}`);
         }).catch((e) => {
          console.log(e);
         });
         console.log(depositDataArbSepolia);    } else {
      // Handle other networks if needed
      console.log('Selected source network not supported');
    }
  };
    // single media query with no options
    const { isOpen, onOpen, onClose } = useDisclosure()
    const tokenList = ["ETH", "USDC", "USDT"];
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
    const [token, setToken] = useState(tokenList[0]);
    const [isFromM,setisFromM]=useState(true);
    return (
        <ChakraProvider>
          <Box backgroundImage={"/background1.png"} backgroundSize={"cover"}>
            <Navbar dir="column" />
            <Box marginTop={"1rem"} height={"5rem"} width={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Button width={"9rem"} height={"70%"} margin={"auto"} backgroundColor={"whitesmoke"} borderRadius={"3rem"} fontSize={"1.4rem"} fontWeight={"800"}>Sender</Button>
            </Box>
            <Box marginTop={"1%"} height={"70vh"} width={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Box height={"90%"} width={ "80%"} backgroundColor={"rgba(115, 115, 115,0.4)"} borderRadius={"2rem"} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} flexDirection={"column"}>
                    <Box margin={"1rem"} height={"80%"} width={"80%"} backgroundColor={"rgba(230, 230, 230,0.1)"} borderRadius={"2rem"} display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
                        <Box marginTop={"1rem"} height={"5%"} textAlign={"center"} width={"100%"} fontWeight={"600"} paddingBottom={"0.5rem"} color={"white"} opacity={"80%"}>From</Box>
                        <Box height={"30%"} width={"90%"} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                            <Button height={"80%"} width={"100%"} onClick={() => {setisFromM(true);onOpen();}} backgroundColor={"transparent"}  _hover={{ bg: "rgba(230, 230, 230,0.1)" }}>
                                {/* <Box height={"80%"} width={"3rem"}>{fromcurr.symbol}</Box> */}
                                <Box display={"flex"}>
                                <Image marginEnd={"1rem"} height={"1.5rem"} src={networkChaintologo.get(selectedSrcNetwork)}></Image>
                                <Text flexGrow={1} color={"white"}>{selectedSrcNetwork}</Text>
                                </Box>
                                <Spacer />
                                <TriangleDownIcon color={"white"}/>
                            </Button>
                            <Input backgroundColor={"rgba(0,0,0,0.2)"} borderColor={"transparent"} width={"auto"} placeholder={"at least 0.00005"} textAlign={"center"} color={"white"} _placeholder={{ color: 'rgba(256,256,256,0.8)' }} onChange={(e) => {setAmount(e.target.value)}}></Input>
                        </Box>
                        <Spacer/>
                    <Button margin={"0.1rem"} height={"8%"} width={"3rem"} backgroundColor={"transparent"} _hover={{ bg: "transparent" }} onClick={()=>{
                      let a = selectedDstNetwork;
                      setSelectedDstNetwork(selectedSrcNetwork);
                      setSelectedSrcNetwork(a);
                    }}>
                      <RepeatIcon color={"white"}/></Button>
                      <Spacer/>
                        <Box height={"5%"} textAlign={"center"} width={"100%"} fontWeight={"600"} paddingBottom={"0.5rem"} color={"white"} opacity={"80%"}>From</Box>
                        <Box marginBottom={"1rem"} height={"30%"} width={"90%"} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                            <Button height={"80%"} width={"100%"} onClick={() => {setisFromM(true);onOpen();}} backgroundColor={"transparent"}  _hover={{ bg: "rgba(230, 230, 230,0.1)" }}>
                                {/* <Box height={"80%"} width={"3rem"}>{fromcurr.symbol}</Box> */}
                                <Box display={"flex"}>
                                <Image marginEnd={"1rem"} height={"1.5rem"} src={networkChaintologo.get(selectedDstNetwork)}></Image>
                                <Text flexGrow={1} color={"white"}>{selectedDstNetwork}</Text>
                                </Box>
                                <Spacer />
                                <TriangleDownIcon color={"white"}/>
                            </Button>
                            <Input width={"auto"} backgroundColor={"rgba(0,0,0,0.2)"} borderColor={"transparent"} isDisabled={true} _hover={{ borderColor: "transparent" }} flexGrow={1} textAlign={"right"} color={"white"} value={amount}></Input>
                        </Box>
                    </Box>
                    <Button isDisabled={!isConnected || (amount==='0')} borderRadius={"3rem"} margin={"1.5rem"} height={"10%"} width={"80%"} backgroundColor={"white"} fontWeight={"800"} fontSize={"1.5rem"} onClick={handleSend}> Send </Button>
                </Box>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Select a Chain</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {networks.map((value, index) => (
            <Button height={"3rem"} width={"80%"} variant={"ghost"} display={"flex"} justifyContent={"flex-start"} onClick={()=>{
              if(isFromM){
                setSelectedSrcNetwork(value);
                onClose();
              }else{
                setSelectedDstNetwork(value);
                onClose();
              }
            }}>
              <Image height={"2rem"} src={networkChaintologo.get(value)}></Image>
               <Text marginStart={"3rem"}>{value}</Text></Button>))}
          </ModalBody>
        </ModalContent>
      </Modal>
      </Box>
        </ChakraProvider>
    )
}

export default Home