import contractInterface from '../abi/starportal-abi.json';
export const contractConfigEthSepolia = {
    addressOrName: '0xc817EB961d6A883bfF0AB60A25819e6b1F7D94dc',
    contractInterface: contractInterface,
  };

  const contractConfigArbSepolia = {
    addressOrName: '0x38149AA01AF04178b9e481D8221aaEa90ad8f722',
    contractInterface: contractInterface, // Make sure this is defined or imported
  };

  export const networkToContractAddressMap = {
    eth_sepolia: '0xc817EB961d6A883bfF0AB60A25819e6b1F7D94dc',
    arb_sepolia: '0x38149AA01AF04178b9e481D8221aaEa90ad8f722',
    Rinkeby: '0xYourContractAddressForRinkeby',
    Goerli: '0xYourContractAddressForGoerli',
    Optimism: '0xYourContractAddressForOptimism',
    Polygon: '0xYourContractAddressForPolygon',
  };
  export const networkToChainIdMap = {
    eth_sepolia: 1001,
    arb_sepolia: 1002,
    Rinkeby: 1004,
    Goerli: 1004,
    Optimism: 1005,
    Polygon: 1006
  };
  export const networkChaintologo = new Map([
    ["eth_sepolia","/logo_eth_sepolia.png"],
    ["arb_sepolia","/logo_arb_sepolia.png"],
    ["Rinkeby","/logo_Rinkeby.png"],
    ["Goerli","/logo_Goerli.png"],
    ["Optimism","/logo_Optimism.png"],
    ["Polygon","/logo_Polygon.png"]])

module.exports = {contractConfigEthSepolia,contractConfigArbSepolia,networkToContractAddressMap,networkToChainIdMap,networkChaintologo}