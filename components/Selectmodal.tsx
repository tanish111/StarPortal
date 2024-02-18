import React from 'react'
import {
     Button, Text, Modal,
   ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton,Image
} from '@chakra-ui/react'
import {networkToContractAddressMap,networkChaintologo} from "../GlobalConts/global"
import { useDataListContext } from './provider/DataProvider'
function Selectmodal(props) {
    const data = useDataListContext();
    const networks = Object.keys(networkToContractAddressMap); // Predefined list of networks\
  return (
    <>
                <Modal isOpen={props.isOpen} onClose={props.onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Select a Chain</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {networks.map((value, index) => (
            <Button height={"3rem"} width={"80%"} variant={"ghost"} display={"flex"} justifyContent={"flex-start"} onClick={()=>{
              if(props.isFromM){
                data.setSelectedSrcNetwork(value);
                props.onClose();
              }else{
                data.setSelectedDstNetwork(value);
                props.onClose();
              }
            }}>
              <Image height={"2rem"} src={networkChaintologo.get(value)}></Image>
               <Text marginStart={"3rem"}>{value}</Text></Button>))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    )
}

export default Selectmodal