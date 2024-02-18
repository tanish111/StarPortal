"use client"
import React, { useContext } from 'react'
import { Box,ChakraProvider,Image,Text } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
function FinishTras() {
  return (
    <ChakraProvider>
    <Box backgroundSize={"cover"} height={"100vh"} width={"100vw"} backgroundImage={"/background2.png"}>
    <Navbar />
    <Box marginTop={"1%"} height={"80vh"} width={"auto"} display={"flex"} justifyContent={"center"} backgroundColor={"black"} alignItems={"center"} >
    <Box height={"85%"} width={ "45%"} backgroundColor={"rgba(115, 115, 115,0.4)"} borderRadius={"2rem"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
      <Box height={"6rem"} margin={"0.5rem"} backgroundColor={"red"} width={"40%"} borderRadius={"1rem"}>
        {/* {amount} */}
      </Box>
      <Box flexGrow={1} margin={"1.5rem"} backgroundColor={"pink"} width={"95%"} display={"flex"} flexDir={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Box height={"80%"} width={"35%"} backgroundColor={"green"} margin={"0.5rem"}  display={"flex"} flexDir={"column"} justifyContent={"space-between"}>
          <Box height={"20%"} width={"100%"} backgroundColor={"purple"}>
            <Text fontSize={"1.8rem"} textAlign={"center"} fontWeight={"600"} color={"white"}>
            ETH
            </Text>
          </Box>
          <Box width={"80%"} height={"70%"}  borderWidth={"0.5rem"} borderColor={"white"} borderRadius={"50%"} margin={"0.1rem"} marginTop={"1rem"} alignSelf={"center"} marginBottom={"1rem"} backgroundColor={"purple"}></Box>
          <Box height={"15%"} width={"50%"} backgroundColor={"purple"} alignSelf={"center"} marginBottom={"0.5rem"} borderRadius={"3rem"}></Box>
        </Box>
        <Box width={"30%"} height={"30%"} backgroundColor={"white"}>
          <Image src={"/run.png"} backgroundColor={"pink"}></Image>
        </Box>
        <Box height={"80%"} width={"35%"} backgroundColor={"green"} margin={"0.5rem"}  display={"flex"} flexDir={"column"} justifyContent={"space-between"}>
          <Box height={"20%"} width={"100%"} backgroundColor={"purple"}>
            <Text fontSize={"1.8rem"} textAlign={"center"} fontWeight={"600"} color={"white"}>
            ETH
            </Text>
          </Box>
          <Box borderWidth={"0.5rem"} borderColor={"white"} width={"80%"} height={"70%"} borderRadius={"50%"} margin={"0.1rem"} marginTop={"1rem"} alignSelf={"center"} marginBottom={"1rem"} backgroundColor={"purple"}></Box>
          <Box height={"15%"} width={"50%"} backgroundColor={"purple"} alignSelf={"center"} marginBottom={"0.5rem"} borderRadius={"3rem"}></Box>
        </Box>  
        </Box>
      </Box>
    </Box>
    </Box>
    </ChakraProvider>
  )
}

export default FinishTras