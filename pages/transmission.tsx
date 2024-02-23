import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, ChakraProvider, Image, Text, useMediaQuery, useToast, Button } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar'
import { TimeIcon, CheckCircleIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { color } from 'framer-motion';
import { networkChaintologo,verifyBaseURL } from '../GlobalConts/global';
const TransmissionPage: React.FC = () => {
  const router = useRouter();
  const [TxHash, setTxHash] = useState('');
  const [amtSrc, setamtSrc] = useState('0');
  const [amount, setAmount] = useState('0');
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  const toast = useToast();
  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
  useEffect(() => {
    const { TxHash, amount, amtSrc, to, from } = router.query;
    if (TxHash) {
      setTxHash(TxHash);
      setAmount(amount);
      setamtSrc(amtSrc);
      setFrom(from);
      setTo(to);
    }
    (async () => {
      if (amtSrc == "-1") {
        toast({
          title: `Transaction Failed`,
          status: 'error',
          isClosable: true,
        })
      } else if (amtSrc == "1") {
        await sleep(10000);
        setamtSrc("2");
        console.log("OK.")
      }
    })();
  }, [router.query]);
  return (
    <ChakraProvider>
      <Box backgroundSize={"cover"} height={"100vh"} width={"100vw"} backgroundImage={amtSrc == "2" ? "/background3.png" : "/background2.png"}>
        <Navbar />
        <Box marginTop={"1%"} height={"80vh"} width={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
          <Box height={"85%"} width={isLargerThan600 ? (isLargerThan800 ? (!isLargerThan1000 ? "60%" : "45%") : "75%") : "95%"} backgroundColor={"rgba(91,91,91,0.6)"} borderRadius={"2rem"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Button _hover={{ bg: "rgba(91,91,91,0.8)" }} marginTop={"1rem"} marginStart={"0.5rem"} height={"1.5rem"} width={"5%"} alignSelf={"start"} backgroundColor={"transparent"} onClick={() => {
              router.push('/')
            }}>
              <ArrowBackIcon color={"white"} />
            </Button>
            <Box height={"6rem"} color={"white"} margin={"0.5rem"} backgroundColor={"rgba(0,0,0,0.3)"} width={"auto"} borderRadius={"1rem"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
              <Text paddingStart={"2rem"} paddingEnd={"2rem"} fontSize={isLargerThan600 ? "1.5rem" : "1rem"} fontWeight={"800"}>{amtSrc != "-1" ? (amtSrc == "2" ? "Processed ✅" : "In Progress ...") : "Transaction Failed"}</Text>
              <Text fontSize={isLargerThan600 ? "1rem" : "0.75rem"} fontWeight={"800"}>Amount: {amount} ETH</Text>
            </Box>
            <Box flexGrow={1} margin={"1.5rem"} width={"95%"} display={"flex"} flexDir={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Box height={"80%"} width={"35%"} margin={"0.5rem"} display={"flex"} flexDir={"column"} justifyContent={"space-between"}>
                <Box height={"20%"} width={"100%"} >
                  <Text fontSize={isLargerThan600 ? "1.5rem" : "1rem"} paddingStart={"20%"} textAlign={"center"} fontWeight={"600"} color={"white"}>
                    {from}
                  </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={"80%"} height={"70%"} borderWidth={"0.8rem"} borderColor={amtSrc == "-1" ? "red" : ((amtSrc == '0') ? "yellow" : "green")} borderRadius={"50%"} margin={"0.1rem"} marginTop={"1rem"} alignSelf={"end"} marginBottom={"1rem"}>
                  <Image height={"70%"} src={networkChaintologo.get(from)}></Image>
                </Box>
                <Box marginStart={"20%"} height={"15%"} width={"50%"} alignSelf={"center"} backgroundColor={"rgba(0,0,0,0.35)"} marginBottom={"0.5rem"} borderRadius={"3rem"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <Text fontSize={isLargerThan600 ? "1rem" : "0.6rem"} width={"95%"} textAlign={"center"} color={"white"} textDecoration={"underline"} onClick={() => {
                    window.open(verifyBaseURL[from] + TxHash)
                  }} ><a>Txn Hash</a>{amtSrc == "0" ? <TimeIcon color={"yellow"} height={isLargerThan600 ? "1rem" : "0.6rem"} paddingStart={"0.3rem"} /> : <CheckCircleIcon color={"green"} height={isLargerThan600 ? "1rem" : "0.6rem"} paddingStart={"0.3rem"} />}</Text>
                </Box>
              </Box>
              <Box width={"30%"} height={"30%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                {(amtSrc == "-1") ? <CloseIcon height={"50%"} width={"50%"} color={"red"} /> :
                  <Image src={amtSrc != "2" ? "/run.gif" : "/bridge.png"} backgroundColor={"tranparent"}></Image>
                }
              </Box>
              <Box height={"80%"} width={"35%"} margin={"0.5rem"} display={"flex"} flexDir={"column"} justifyContent={"space-between"}>
                <Box height={"20%"} width={"100%"}>
                  <Text fontSize={isLargerThan600 ? "1.5rem" : "1rem"} paddingEnd={"20%"} textAlign={"center"} fontWeight={"600"} color={"white"}>
                    {to}
                  </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} borderWidth={"0.8rem"} borderColor={amtSrc == "-1" ? "red" : ((amtSrc != '2') ? "yellow" : "green")} width={"80%"} height={"70%"} borderRadius={"50%"} margin={"0.1rem"} marginTop={"1rem"} alignSelf={"start"} marginBottom={"1rem"}>
                  <Image height={"70%"} src={networkChaintologo.get(to)}></Image>
                </Box>
                <Box marginEnd={"20%"} height={"15%"} width={"50%"} alignSelf={"center"} backgroundColor={"rgba(0,0,0,0.35)"} marginBottom={"0.5rem"} borderRadius={"3rem"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <Text fontSize={isLargerThan600 ? "1rem" : "0.6rem"} width={"95%"} textAlign={"center"} color={"white"} textDecoration={"underline"} onClick={() => {
                    window.open("https://sepolia.etherscan.io/tx/" + TxHash)
                  }}><a>Txn Hash</a>{amtSrc != "2" ? <TimeIcon color={"yellow"} height={isLargerThan600 ? "1rem" : "0.6rem"} paddingStart={"0.3rem"} /> : <CheckCircleIcon color={"green"} height={isLargerThan600 ? "1rem" : "0.6rem"} paddingStart={"0.3rem"} />}</Text>
                </Box>
              </Box>
            </Box>
            <Button margin="0.5rem" width={"auto"} height={"2rem"} backgroundColor={"rgba(0,0,0,0.5)"} color={"white"} _hover={{ bg: "rgba(0,0,0,0.7)" }} onClick={() => {
              router.push('/')
            }}>Home</Button>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default TransmissionPage;
