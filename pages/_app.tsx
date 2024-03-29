import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import DataProvider from "../components/provider/DataProvider"
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  wallet,
  darkTheme,
  ConnectButton
  
} from '@rainbow-me/rainbowkit';
// import { useBalance } from 'wagmi/hooks';
import '../styles/global.css';
import { chain, createClient, configureChains, WagmiConfig,Chain } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { infuraProvider } from 'wagmi/providers/infura'
import { InjectedConnector } from 'wagmi/connectors/injected'

import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'

import { useState } from "react";
import App from 'next/app';

const customChains = [
  {
    id: 11155111,
    name: 'Ethereum Sepolia Testnet',
    network: 'ethSepolia',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      custom: 'https://sepolia.infura.io/v3/2d3b60309d864e05862147e530243ec6'
    },
    testnet: true
  },
  {
    id: 421614,
    name: 'Arbitrum Sepolia Testnet',
    network: 'arbSepolia',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      custom: 'https://arbitrum-sepolia.infura.io/v3/2d3b60309d864e05862147e530243ec6'
    },
    testnet: true
  }
]

const infuraId = '2d3b60309d864e05862147e530243ec6';
const { chains, provider, webSocketProvider } = configureChains(customChains, [
  jsonRpcProvider({
    rpc: (chain) => ({
      http: chain.rpcUrls.custom, // Assuming 'custom' is the key for the RPC URL in each chain object
    })
  })
],
[
  alchemyProvider({ alchemyId: 'FGW1M0dpueWNm3_6nFCgUvOK8sGNJfoM' }),
  publicProvider(),
]
)

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit Mint NFT Demo',
  chains,
});

const demoAppInfo = {
  appName: 'RainbowKit Mint NFT Demo',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [wallet.argent({ chains }), wallet.trust({ chains })],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});
function MyApp({ Component, pageProps }: AppProps) {
const [amount,setAmount] = useState("0");
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode theme={darkTheme()} appInfo={demoAppInfo} chains={chains}>
        <DataProvider>
        <Component {...pageProps} />
        </DataProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
