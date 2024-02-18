import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router';
import {
     Box, Button, ChakraProvider, Text, useMediaQuery, Select, Modal,
    ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton, useDisclosure, Input,Image,useToast
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
import Footer from '../components/Footer'
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
          console.log(e);
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
            <Navbar />
            <Box marginTop={"1rem"} height={"5rem"} width={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Button width={"9rem"} height={"70%"} margin={"auto"} backgroundColor={"whitesmoke"} borderRadius={"3rem"} fontSize={"1.4rem"} fontWeight={"800"}>Sender</Button>
            </Box>
            <Box marginTop={"1%"} height={"80vh"} width={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <Box height={"75%"} width={isLargerThan1000 ? "45%" : isLargerThan800 ? "60%" : "80%"} backgroundColor={"rgba(115, 115, 115,0.4)"} borderRadius={"2rem"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                <Box height={"10%"} width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Text fontSize={"1.3rem"} fontWeight={"800"} padding={"1rem"} color={"white"}>Token:</Text>
                <Box height={"60%"} borderRadius={"5rem"} width={"6rem"} backgroundColor={"black"} display={"flex"} flexDir={"column"} justifyContent={"center"}>
                            <Select color={"white"} backgroundColor={"rgba(230, 230, 230,0.1)"} defaultValue={tokenList[0]} variant='filled' size='lg' icon={<TriangleDownIcon />} onChange={(e) => { setToken(tokenList[e.target.value]) }}>
                                {tokenList.map((value, index) => (
                                    <option value={index} key={value}>
                                        {value}
                                    </option>
                                ))}
                            </Select>
                        </Box>
                </Box>
                  <Box height={"60%"} width={"100%"} display={"flex"} flexDir={"row"} alignItems={"center"}>
                    <Box margin={"1rem"} height={"80%"} width={"45%"} backgroundColor={"rgba(0, 0, 0,0.5)"} borderRadius={"2rem"} display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"space-around"}>
                        <Box height={"20%"} width={"90%"} fontWeight={"800"} paddingBottom={"1.5rem"} color={"rgb(200,200,200)"}><Text width={"100%"} textAlign={"center"} fontSize={"1.5rem"} padding={"1rem"}>Source</Text></Box>
                        <Image padding={"1rem"} src={networkChaintologo.get(selectedSrcNetwork)} height={"60%"}></Image>
                        <Box height={"20%"} width={"100%"} display={"flex"} flexDir={"column"} justifyContent={"space-around"} alignItems={"center"}>
                            <Button height={"97%"} width={"97%"} borderRadius={"3rem"} onClick={() => {setisFromM(true);onOpen();}} backgroundColor={"rgba(0,0,0,0.4)"}  _hover={{ bg: "rgba(230, 230, 230,0.1)" }}>
                                {/* <Box height={"80%"} width={"3rem"}>{fromcurr.symbol}</Box> */}
                                <Image height={"1.8rem"} src={networkChaintologo.get(selectedSrcNetwork)}></Image>
                                <Text flexGrow={1} color={"white"}>{selectedSrcNetwork}</Text>
                                <TriangleDownIcon color={"white"}/>
                            </Button>
                        </Box>
                    </Box>
                    <Button margin={"0.1rem"} height={"8%"} width={"3rem"} backgroundColor={"transparent"} _hover={{ bg: "transparent" }} onClick={()=>{
                      let a = selectedDstNetwork;
                      setSelectedDstNetwork(selectedSrcNetwork);
                      setSelectedSrcNetwork(a);
                    }}><RepeatIcon color={"white"}/></Button>
                    <Box margin={"1rem"} height={"80%"} width={"45%"} backgroundColor={"rgba(0, 0, 0,0.5)"} borderRadius={"2rem"} display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"space-around"}>
                        <Box height={"20%"} width={"90%"} fontWeight={"800"} paddingBottom={"1.5rem"} color={"rgb(200,200,200)"}><Text width={"100%"} textAlign={"center"} fontSize={"1.5rem"} padding={"1rem"}>Destination</Text></Box>
                        <Image padding={"1rem"} src={networkChaintologo.get(selectedDstNetwork)} height={"60%"}></Image>
                        <Box height={"20%"} width={"100%"} display={"flex"} flexDir={"column"} justifyContent={"space-around"} alignItems={"center"}>
                            <Button height={"97%"} width={"97%"} borderRadius={"3rem"} onClick={() => {setisFromM(false);onOpen();}} backgroundColor={"rgba(0,0,0,0.4)"}  _hover={{ bg: "rgba(230, 230, 230,0.1)" }}>
                            <Image height={"1.8rem"} src={networkChaintologo.get(selectedDstNetwork)}></Image>
                                <Text flexGrow={1} color={"white"}>{selectedDstNetwork}</Text>
                                <TriangleDownIcon color={"white"}/>
                            </Button>
                        </Box>
                    </Box>
                    </Box>
                    <Box height={"10%"} width={"90%"} margin={"1rem"} display={"flex"} flexDir={"row"} justifyContent={"space-between"}>
                      <Box height={"90%"} width={"40%"} display={"flex"} flexDir={"row"} alignItems={"center"}>
                        <Text fontSize={"1.2rem"} fontWeight={"800"} color={"#C2C2C2"}>Send</Text>
                        <Input height={"95%"} fontSize={"0.8rem"} marginStart={"1rem"} marginEnd={"0.5rem"} backgroundColor={"white"} borderRadius={"2rem"} borderColor={"transparent"} flexGrow={1} placeholder={"at least 0.00005"} textAlign={"right"} color={"black"} onChange={(e) => {setAmount(e.target.value)}}></Input>
                        <Text fontSize={"1.2rem"} fontWeight={"800"} color={"#C2C2C2"}>Max</Text>
                      </Box>
                      <Box height={"90%"} width={"40%"} display={"flex"} flexDir={"row"} alignItems={"center"} justifyContent={"center"}>
                      <Text fontSize={"1.2rem"} fontWeight={"800"} color={"#C2C2C2"} padding={"1rem"}>Recieve:</Text>
                      <Text fontSize={"0.8rem"} fontWeight={"400"} color={"#C2C2C2"} textAlign={"right"}>{amount}</Text>
                      </Box>
                    </Box>
                    <Button isDisabled={!isConnected || (amount==='0')} borderRadius={"3rem"} marginBottom={"1rem"} height={"10%"} width={"20%"}  backgroundColor={"white"} fontWeight={"800"} fontSize={"1.3rem"} onClick={handleSend}> Send </Button>
                </Box>
            </Box>
            <Footer />
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