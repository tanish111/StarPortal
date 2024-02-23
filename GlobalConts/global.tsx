import contractInterface from '../abi/starportal-abi.json';
const contractConfigEthSepolia = {
    addressOrName: '0xc817EB961d6A883bfF0AB60A25819e6b1F7D94dc',
    contractInterface: contractInterface,
  };

const contractConfigArbSepolia = {
    addressOrName: '0x38149AA01AF04178b9e481D8221aaEa90ad8f722',
    contractInterface: contractInterface, 
};
  export const networkToContractAddressMap = {
    eth_sepolia: '0xc817EB961d6A883bfF0AB60A25819e6b1F7D94dc',
    arb_sepolia: '0x38149AA01AF04178b9e481D8221aaEa90ad8f722',
    Goerli: '0xYourContractAddressForGoerli',
    Optimism: '0xYourContractAddressForOptimism',
    Polygon: '0xYourContractAddressForPolygon',
  };
  export const networkToChainIdMap = {
    eth_sepolia: 1001,
    arb_sepolia: 1002,
    Goerli: 1004,
    Optimism: 1005,
    Polygon: 1006
  };
  export const networkChaintologo = new Map([
    ["eth_sepolia","/logo_eth_sepolia.png"],
    ["arb_sepolia","/logo_arb_sepolia.png"],
    ["Goerli","/logo_Goerli.png"],
    ["Optimism","/logo_Optimism.png"],
    ["Polygon","/logo_Polygon.png"]])
export const chaintoID =  {
      eth_sepolia: 11155111,
      arb_sepolia: 421614,
      Goerli: 5,
      Optimism: 10,
      Polygon: 137,
  } 
  export const verifyBaseURL = {
    arb_sepolia:"https://sepolia.arbiscan.io/tx/",
    eth_sepolia:"https://sepolia.etherscan.io/tx/"
  }
module.exports = {contractConfigEthSepolia,contractConfigArbSepolia,networkToContractAddressMap,networkToChainIdMap,networkChaintologo,chaintoID,verifyBaseURL}