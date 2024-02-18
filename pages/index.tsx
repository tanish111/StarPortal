import React, { useState, useCallback } from 'react';

import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import {
  useConnect,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';

import { ethers } from 'ethers';

import { useRouter } from 'next/router';

// import TransmissionPage from './transmission'; // Importing the TransmissionPage component



import './css/TokenTransactionPage.module.css'; // Make sure to create the corresponding CSS file

import contractInterface from '../abi/starportal-abi.json';


const TokenTransactionPage = () => {
    const router = useRouter();

  const [fromToken, setFromToken] = useState('ETH'); // Default from token
  const [toToken, setToToken] = useState('Optimism'); // Default to token
  const [amount, setAmount] = useState(''); // Amount to send
  const [selectedSrcNetwork, setSelectedSrcNetwork] = useState(''); // Default Source network
  const [selectedDstNetwork, setSelectedDstNetwork] = useState(''); // Default Destination network

  const { isConnected } = useConnect();

  const contractConfigEthSepolia = {
    addressOrName: '0xc817EB961d6A883bfF0AB60A25819e6b1F7D94dc',
    contractInterface: contractInterface, // Make sure this is defined or imported
  };

  const contractConfigArbSepolia = {
    addressOrName: '0x38149AA01AF04178b9e481D8221aaEa90ad8f722',
    contractInterface: contractInterface, // Make sure this is defined or imported
  };

  const {
    data: depositDataEthSepolia,
    write: depositEthSepolia,
    isLoading: isDepositLoadingEthSepolia,
    isSuccess: isDepositStartedEthSepolia,
  } = useContractWrite(contractConfigEthSepolia, 'deposit'
  );
  

   const {
    data: depositDataArbSepolia,
    write: depositArbSepolia,
    isLoading: isDepositLoadingArbSepolia,
    isSuccess: isDepositStartedArbSepolia,
  } = useContractWrite(contractConfigArbSepolia, 'deposit');

 
//    const { data: totalSupplyData } = useContractRead(
//      contractConfig,
//      'getNumber',
//      { watch: true }
//    );
 
//    const { isSuccess: txSuccess } = useWaitForTransaction({
//      hash: depositData?.hash,
//    });
 

  const networkToContractAddressMap = {
    eth_sepolia: '0xc817EB961d6A883bfF0AB60A25819e6b1F7D94dc',
    arb_sepolia: '0x38149AA01AF04178b9e481D8221aaEa90ad8f722',
    Kovan: '0xYourContractAddressForKovan',
    Rinkeby: '0xYourContractAddressForRinkeby',
    Goerli: '0xYourContractAddressForGoerli',
    Optimism: '0xYourContractAddressForOptimism',
    Polygon: '0xYourContractAddressForPolygon',
  };

  const networkToChainIdMap = {
    eth_sepolia: 1001,
    arb_sepolia: 1002,
    Kovan: 1003,
    Rinkeby: 1004,
    Goerli: 1004,
    Optimism: 1005,
    Polygon: 1006
  };


 const networks = Object.keys(networkToContractAddressMap); // Predefined list of networks\


  const handleSend = async () => {

    if (selectedSrcNetwork == 'eth_sepolia') {

      await depositEthSepolia({args : [networkToChainIdMap[selectedDstNetwork as keyof typeof networkToChainIdMap]],
         overrides: { value: ethers.utils.parseEther(amount)
         }, 

    });
    } else if (selectedSrcNetwork == 'arb_sepolia') {

      await depositArbSepolia({args : [networkToChainIdMap[selectedDstNetwork as keyof typeof networkToChainIdMap]],
         overrides: { value: ethers.utils.parseEther(amount)
         }, 
    });

    } else {
      // Handle other networks if needed
      console.log('Selected source network not supported');
    }

    const srcTxHash = '...';
    const dstTxHash = '...';

    // Navigate to TransmissionPage with transaction details
    router.push(`/transmission?srcTxHash=${srcTxHash}&dstTxHash=${dstTxHash}`);
  };

  
  return (
    <div className="transaction-container">
      <div className="transaction-box">
        <div className="section">
          <h2 className="section-heading">Source</h2>
          <div className="network-selection">
            <label htmlFor="srcNetworkDropdown">Choose a network:</label>
            <select
              id="srcNetworkDropdown"
              value={selectedSrcNetwork}
              onChange={(e) => setSelectedSrcNetwork(e.target.value)}
            >
              {networks.map((network) => (
                <option key={network} value={network}>
                  {network}
                </option>
              ))}
            </select>
          </div>
          <div className="amount-input">
            <label htmlFor="amountInput">Send:</label>
            <input
              type="text"
              id="amountInput"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <br></br>
        <br></br>

        <div className="section">
          <h2 className="section-heading">Destination</h2>
          <div className="network-selection">
            <label htmlFor="dstNetworkDropdown">Choose a network:</label>
            <select
              id="dstNetworkDropdown"
              value={selectedDstNetwork}
              onChange={(e) => setSelectedDstNetwork(e.target.value)}
            >
              {networks.map((network) => (
                <option key={network} value={network}>
                  {network}
                </option>
              ))}
            </select>
          </div>
          <div className="amount-display">
            <p>Recieve: {amount}</p>
          </div>
        </div>
        <div className="send-button">
          <button onClick={handleSend}>SEND</button>
        </div>
        <div className="connect-button">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
  
};

export default TokenTransactionPage;
