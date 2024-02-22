import React from 'react'
import Navbar from '../components/Navbar'
import {
     Box, Button, ChakraProvider, Text, useMediaQuery, useDisclosure, Input,Image,useToast, Spacer
} from '@chakra-ui/react'
import { useState } from 'react'
import { TriangleDownIcon,RepeatIcon } from '@chakra-ui/icons'
import { useDataListContext } from '../components/provider/DataProvider'
import {networkToContractAddressMap,networkChaintologo} from "../GlobalConts/global"
import Selectmodal from '../components/Selectmodal';
import SendBt from '../components/SendBt';
function Home() {
  const data = useDataListContext();
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
            <Box marginTop={"1rem"} height={"3rem"} width={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Input width={"auto"} height={"70%"} margin={"auto"} backgroundColor={"whitesmoke"} borderRadius={"3rem"} fontSize={"1rem"} fontWeight={"800"} placeholder='What do you want to do?'></Input>
            </Box>
            <Box marginTop={"1%"} height={"70vh"} width={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Box height={"90%"} width={ "80%"} backgroundColor={"rgba(115, 115, 115,0.4)"} borderRadius={"2rem"} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} flexDirection={"column"}>
                    <Box margin={"1rem"} height={"80%"} width={"80%"} backgroundColor={"rgba(230, 230, 230,0.1)"} borderRadius={"2rem"} display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
                        <Box marginTop={"1rem"} height={"5%"} textAlign={"center"} width={"100%"} fontWeight={"600"} paddingBottom={"0.5rem"} color={"white"} opacity={"80%"}>From</Box>
                        <Box height={"30%"} width={"90%"} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                            <Button height={"80%"} width={"100%"} onClick={() => {setisFromM(true);onOpen();}} backgroundColor={"transparent"}  _hover={{ bg: "rgba(230, 230, 230,0.1)" }}>
                                {/* <Box height={"80%"} width={"3rem"}>{fromcurr.symbol}</Box> */}
                                <Box display={"flex"}>
                                <Image marginEnd={"1rem"} height={"1.5rem"} src={networkChaintologo.get(data.selectedSrcNetwork)}></Image>
                                <Text flexGrow={1} color={"white"}>{data.selectedSrcNetwork}</Text>
                                </Box>
                                <Spacer />
                                <TriangleDownIcon color={"white"}/>
                            </Button>
                            <Input backgroundColor={"rgba(0,0,0,0.2)"} borderColor={"transparent"} width={"auto"} placeholder={"at least 0.00005"} textAlign={"center"} color={"white"} _placeholder={{ color: 'rgba(256,256,256,0.8)' }} onChange={(e) => {data.setAmount(e.target.value)}}></Input>
                        </Box>
                        <Spacer/>
                    <Button margin={"0.1rem"} height={"8%"} width={"3rem"} backgroundColor={"transparent"} _hover={{ bg: "transparent" }} onClick={()=>{
                      let a = data.selectedDstNetwork;
                      data.setSelectedDstNetwork(data.selectedSrcNetwork);
                      data.setSelectedSrcNetwork(a);
                    }}>
                      <RepeatIcon color={"white"}/></Button>
                      <Spacer/>
                        <Box height={"5%"} textAlign={"center"} width={"100%"} fontWeight={"600"} paddingBottom={"0.5rem"} color={"white"} opacity={"80%"}>To</Box>
                        <Box marginBottom={"1rem"} height={"30%"} width={"90%"} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                            <Button height={"80%"} width={"100%"} onClick={() => {setisFromM(true);onOpen();}} backgroundColor={"transparent"}  _hover={{ bg: "rgba(230, 230, 230,0.1)" }}>
                                {/* <Box height={"80%"} width={"3rem"}>{fromcurr.symbol}</Box> */}
                                <Box display={"flex"}>
                                <Image marginEnd={"1rem"} height={"1.5rem"} src={networkChaintologo.get(data.selectedDstNetwork)}></Image>
                                <Text flexGrow={1} color={"white"}>{data.selectedDstNetwork}</Text>
                                </Box>
                                <Spacer />
                                <TriangleDownIcon color={"white"}/>
                            </Button>
                            <Input width={"auto"} backgroundColor={"rgba(0,0,0,0.2)"} borderColor={"transparent"} isDisabled={true} _hover={{ borderColor: "transparent" }} flexGrow={1} textAlign={"right"} color={"white"} value={data.amount}></Input>
                        </Box>
                    </Box>
                    <SendBt />
                                    </Box>
            </Box>
            <Selectmodal isOpen={isOpen} onClose={onClose} isFromM={isFromM} />

      </Box>
        </ChakraProvider>
    )
}

export default Home