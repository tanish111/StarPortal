import React from 'react'
import { chakra,Box,Image,Text,Button } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
// import starlogo from "/starportal_logo.png"

function Navbar() {
  return (
    <Box width={"auto"} height={"6rem"} display={"flex"} alignItems={"flex-start"}>
        <Box margin={"auto"} marginStart={"1rem"} backgroundImage={"/starportal_logo.png"} backgroundColor={"transparent"} backgroundSize="contain" backgroundRepeat={"no-repeat"} width={"20%"} height={"80%"}></Box>
        <Box margin={"auto"} marginEnd={"1rem"} flexGrow={1} height={"80%"} backgroundColor={"trasparent"} display={"flex"}>
            <Box margin={"auto"} flexGrow={1} height={"80%"}></Box>
<ConnectButton />
        </Box>
    </Box>
  )
}

export default Navbar