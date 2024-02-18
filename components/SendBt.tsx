import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useDataListContext } from '../components/provider/DataProvider'
import { Button } from '@chakra-ui/react';
import {
    useConnect,
    useContractRead,
    useContractWrite,
    useWaitForTransaction,
  } from 'wagmi';
import { ethers } from 'ethers';
import {contractConfigEthSepolia,networkToContractAddressMap,networkToChainIdMap,networkChaintologo,contractConfigArbSepolia} from "../GlobalConts/global"
import Customconnect from './Customconnect';
function SendBt() {
    const data = useDataListContext();
    const { isConnected } = useConnect();
    const [sendHash,SetsendHash] = useState('');
    const router = useRouter();
    const networks = Object.keys(networkToContractAddressMap); // Predefined list of networks\
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
      const handleSend = async () => {
        if (data.selectedSrcNetwork == 'eth_sepolia') {
          router.push(`/transmission?TxHash=${depositDataArbSepolia}&data.amount=${data.amount}&amtSrc=0&from=${data.selectedSrcNetwork}&to=${data.selectedDstNetwork}`);
          await depositEthSepolia({args : [networkToChainIdMap[data.selectedDstNetwork as keyof typeof networkToChainIdMap]],
             overrides: { value: ethers.utils.parseEther(data.amount)
             }, }).then((e)=>{
              SetsendHash(e.hash);
              router.push(`/transmission?TxHash=${e.hash}&data.amount=${data.amount}&amtSrc=1&from=${data.selectedSrcNetwork}&to=${data.selectedDstNetwork}`);
             }).catch((e) => {
              console.log(e);
              router.push(`/transmission?TxHash=${e.hash}&data.amount=${data.amount}&amtSrc=-1&from=${data.selectedSrcNetwork}&to=${data.selectedDstNetwork}`);
             });
        } else if (data.selectedSrcNetwork == 'arb_sepolia') {
          router.push(`/transmission?TxHash=${depositDataEthSepolia}&data.amount=${data.amount}&amtSrc=0&from=${data.selectedSrcNetwork}&to=${data.selectedDstNetwork}`);
          await depositArbSepolia({args : [networkToChainIdMap[data.selectedDstNetwork as keyof typeof networkToChainIdMap]],
             overrides: { value: ethers.utils.parseEther(data.amount)
             }, }).then((e)=>{
              console.log(e);
          router.push(`/transmission?TxHash=${depositDataEthSepolia}&data.amount=${data.amount}&amtSrc=0&from=${data.selectedSrcNetwork}&to=${data.selectedDstNetwork}`);
             }).catch((e) => {
              console.log(e);
              router.push(`/transmission?TxHash=${e.hash}&data.amount=${data.amount}&amtSrc=-1&from=${data.selectedSrcNetwork}&to=${data.selectedDstNetwork}`);
             });
       } else {
          // Handle other networks if needed
          console.log('Selected source network not supported');
        }
      };
  return (
    <>
     {(!isConnected) ? <Customconnect /> : <Button color={"white"} isDisabled={Number(data.amount)<=0} borderRadius={"3rem"} marginBottom={"1rem"} height={"10%"} width={"20%"}  backgroundColor={"black"} fontWeight={"800"} fontSize={"1.3rem"} onClick={handleSend}> Send </Button>}
    </>
  )
}

export default SendBt