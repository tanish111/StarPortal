import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router';
import SendBt from '../components/SendBt';
import { useAccount } from 'wagmi'
import { useDataListContext } from '../components/provider/DataProvider'
import {networkToContractAddressMap,networkChaintologo} from "../GlobalConts/global"
import {
     Box, Button, ChakraProvider, Text, useMediaQuery, Select, Modal,
    ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton, useDisclosure, Input,Image,useToast, Spacer
} from '@chakra-ui/react'
import { useState } from 'react'
import { TriangleDownIcon,RepeatIcon } from '@chakra-ui/icons'
import Selectmodal from '../components/Selectmodal';

function Home() {
  const data = useDataListContext();
  const networks = Object.keys(networkToContractAddressMap); // Predefined list of networks\
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
            <Navbar dir="row"/>
            <Box marginTop={"1rem"} height={"5rem"} width={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Input width={"auto"} height={"70%"} margin={"auto"} backgroundColor={"whitesmoke"} borderRadius={"3rem"} fontSize={"1.4rem"} fontWeight={"800"} placeholder='What do you want to do?'></Input>
            </Box>
            <Text textAlign={"center"} width={"100%"} fontSize={"2rem"} color={"white"} alignSelf={"center"}>OR</Text>
            <Box height={"80vh"} flexDir={"column"} width={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <Box marginTop={"1rem"} height={"75%"} width={isLargerThan1000 ? "45%" : isLargerThan800 ? "60%" : "80%"} backgroundColor={"rgba(115, 115, 115,0.4)"} borderRadius={"2rem"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
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
                        <Image padding={"1rem"} src={networkChaintologo.get(data.selectedSrcNetwork)} height={"60%"}></Image>
                        <Box height={"20%"} width={"100%"} display={"flex"} flexDir={"column"} justifyContent={"space-around"} alignItems={"center"}>
                            <Button height={"97%"} width={"97%"} borderRadius={"3rem"} onClick={() => {setisFromM(true);onOpen();}} backgroundColor={"rgba(0,0,0,0.4)"}  _hover={{ bg: "rgba(230, 230, 230,0.1)" ,h:"97%",w:"97%" }}>
                                {/* <Box height={"80%"} width={"3rem"}>{fromcurr.symbol}</Box> */}
                                <Image height={"1.8rem"} src={networkChaintologo.get(data.selectedSrcNetwork)}></Image>
                                <Text flexGrow={1} color={"white"}>{data.selectedSrcNetwork}</Text>
                                <TriangleDownIcon color={"white"}/>
                            </Button>
                        </Box>
                    </Box>
                    <Button margin={"0.1rem"} height={"8%"} width={"3rem"} backgroundColor={"transparent"} _hover={{ bg: "transparent" }} onClick={()=>{
                      let a = data.selectedDstNetwork;
                      data.setSelectedDstNetwork(data.selectedSrcNetwork);
                      data.setSelectedSrcNetwork(a);
                    }}><RepeatIcon color={"white"}/></Button>
                    <Box margin={"1rem"} height={"80%"} width={"45%"} backgroundColor={"rgba(0, 0, 0,0.5)"} borderRadius={"2rem"} display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"space-around"}>
                        <Box height={"20%"} width={"90%"} fontWeight={"800"} paddingBottom={"1.5rem"} color={"rgb(200,200,200)"}><Text width={"100%"} textAlign={"center"} fontSize={"1.5rem"} padding={"1rem"}>Destination</Text></Box>
                        <Image padding={"1rem"} src={networkChaintologo.get(data.selectedDstNetwork)} height={"60%"}></Image>
                        <Box height={"20%"} width={"100%"} display={"flex"} flexDir={"column"} justifyContent={"space-around"} alignItems={"center"}>
                            <Button height={"97%"} width={"97%"} borderRadius={"3rem"} onClick={() => {setisFromM(false);onOpen();}} backgroundColor={"rgba(0,0,0,0.4)"}  _hover={{ bg: "rgba(230, 230, 230,0.1)",h:"97%",w:"97%" }}>
                            <Image height={"1.8rem"} src={networkChaintologo.get(data.selectedDstNetwork)}></Image>
                                <Text flexGrow={1} color={"white"}>{data.selectedDstNetwork}</Text>
                                <TriangleDownIcon color={"white"}/>
                            </Button>
                        </Box>
                    </Box>
                    </Box>
                    <Box height={"10%"} width={"90%"} margin={"1rem"} display={"flex"} flexDir={"row"} justifyContent={"space-between"}>
                      <Box height={"90%"} width={"40%"} display={"flex"} flexDir={"row"} alignItems={"center"}>
                        <Text fontSize={"1.2rem"} fontWeight={"800"} color={"#C2C2C2"}>Send</Text>
                        <Input height={"95%"} fontSize={"0.8rem"} marginStart={"1rem"} marginEnd={"0.5rem"} backgroundColor={"white"} borderRadius={"2rem"} borderColor={"transparent"} flexGrow={1} placeholder={"at least 0.00005"} textAlign={"right"} color={"black"} onChange={(e) => {data.setAmount(e.target.value)}}></Input>
                        <Text fontSize={"1.2rem"} fontWeight={"800"} color={"#C2C2C2"}>Max</Text>
                      </Box>
                      <Box height={"90%"} width={"40%"} display={"flex"} flexDir={"row"} alignItems={"center"} justifyContent={"center"}>
                      <Text fontSize={"1.2rem"} fontWeight={"800"} color={"#C2C2C2"} padding={"1rem"}>Recieve:</Text>
                      <Text fontSize={"0.8rem"} fontWeight={"400"} color={"#C2C2C2"} textAlign={"right"}>{data.amount}</Text>
                      </Box>
                    </Box>
                                <SendBt />
                                    </Box>
                <Spacer/>
            </Box>
            <Selectmodal isOpen={isOpen} onClose={onClose} isFromM={isFromM} />
      </Box>
        </ChakraProvider>
    )
}

export default Home