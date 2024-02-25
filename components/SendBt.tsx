import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useDataListContext } from '../components/provider/DataProvider'
import { Button, Switch } from '@chakra-ui/react';
import {
    useConnect,
    useContractRead,
    useContractWrite
  } from 'wagmi';
import { switchNetwork } from '@wagmi/core'
import { ethers } from 'ethers';
import {networkToContractAddressMap,networkToChainIdMap,networkChaintologo,chaintoID} from "../GlobalConts/global"
import Customconnect from './Customconnect';
import contractInterface from '../abi/starportal-abi.json';
async function getChainId() {
  try {
    const chainId = Number(await window.ethereum.request({ method: "eth_chainId" }));
    const network = ethers.providers.getNetwork(chainId);
    console.log(`Network name: ${network.name}, id:${network.chainId}`);
    return network.chainId;
  } catch (error) {
    console.log(error);
  }
}
function SendBt() {
    const data = useDataListContext();
    const { isConnected } = useConnect();
    const [sendHash,SetsendHash] = useState('');
    const router = useRouter();
    const networks = Object.keys(networkToContractAddressMap); // Predefined list of networks\
    const contractConfig = {
      addressOrName: networkToContractAddressMap[data.selectedSrcNetwork],
      contractInterface: contractInterface,
    };
    const {
        data: depositData,
        writeAsync: deposit,
        isLoading: isDepositLoading,
        isSuccess: isDepositStarted, 
      } = useContractWrite(contractConfig, 'deposit');
      const handleSend = async () => {
        const c = await getChainId();
        console.log(c,chaintoID[data.selectedSrcNetwork])
        if (c == chaintoID[data.selectedSrcNetwork]) {
          router.push(`/transmission?TxHash=${depositData}&amount=${data.amount}&amtSrc=0&from=${data.selectedSrcNetwork}&to=${data.selectedDstNetwork}`);
          await deposit({args : [networkToChainIdMap[data.selectedDstNetwork as keyof typeof networkToChainIdMap]],
             overrides: { value: ethers.utils.parseEther(data.amount)
             }, }).then((e)=>{
              SetsendHash(e.hash);
              router.push(`/transmission?TxHash=${e.hash}&amount=${data.amount}&amtSrc=1&from=${data.selectedSrcNetwork}&to=${data.selectedDstNetwork}`);
             }).catch((e) => {
              window.alert(e.data.message);
              router.push(`/transmission?TxHash=${e.hash}&amount=${data.amount}&amtSrc=-1&from=${data.selectedSrcNetwork}&to=${data.selectedDstNetwork}`);
             });
       } 
       else {
          // Handle other networks if needed
          const network = await switchNetwork({
            chainId: chaintoID[data.selectedSrcNetwork]
          }).catch((e)=>{
            console.log(e)
            window.alert("Chain not added to wallet")
          })
          console.log('Chain Mismatch');
        }
      };
  return (
    <>
     {(!isConnected) ? <Customconnect /> : <Button color={"white"} isDisabled={(Number(data.amount)<=0 || !(data.userBalance>=data.amount))} borderRadius={"3rem"} marginBottom={"1rem"} height={"10%"} width={"20%"}  backgroundColor={"black"} fontWeight={"800"} fontSize={"1.3rem"} onClick={handleSend}> Send </Button>}
    </>
  )
}

export default SendBt