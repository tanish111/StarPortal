/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.css */ \"./pages/global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wagmi/core/providers/jsonRpc */ \"@wagmi/core/providers/jsonRpc\");\n/* harmony import */ var _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// import { useBalance } from 'wagmi/hooks';\n // Make sure to create the corresponding CSS file\n\n\n\n\n\n// Defining all the chains \nconst customChains = [\n    {\n        id: 11155111,\n        name: \"Ethereum Sepolia Testnet\",\n        network: \"ethSepolia\",\n        nativeCurrency: {\n            name: \"Ethereum\",\n            symbol: \"ETH\",\n            decimals: 18\n        },\n        rpcUrls: {\n            custom: \"https://sepolia.infura.io/v3/2d3b60309d864e05862147e530243ec6\"\n        },\n        testnet: true\n    },\n    {\n        id: 421614,\n        name: \"Arbitrum Sepolia Testnet\",\n        network: \"arbSepolia\",\n        nativeCurrency: {\n            name: \"Ethereum\",\n            symbol: \"ETH\",\n            decimals: 18\n        },\n        rpcUrls: {\n            custom: \"https://arbitrum-sepolia.infura.io/v3/2d3b60309d864e05862147e530243ec6\"\n        },\n        testnet: true\n    }\n];\nconst infuraId = \"2d3b60309d864e05862147e530243ec6\";\nconst { chains , provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)(customChains, [\n    (0,_wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__.jsonRpcProvider)({\n        rpc: (chain)=>({\n                http: chain.rpcUrls.custom\n            })\n    })\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__.alchemyProvider)({\n        alchemyId: \"FGW1M0dpueWNm3_6nFCgUvOK8sGNJfoM\"\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)(), \n]);\n// const { chains, provider } = configureChains(customChains, [\n//   jsonRpcProvider({\n//     url: 'https://sepolia.infura.io/v3', // This URL is required for the Ethereum Sepolia Testnet\n//   }),\n//   jsonRpcProvider({\n//     url: 'https://arbitrum-sepolia.infura.io/v3', // This URL is required for the Arbitrum Sepolia Testnet\n//   }),\n// ])\n// const wagmiClient = createClient({\n//   autoConnect: true,\n//   connectors: [new InjectedConnector({ chains })],\n//   provider,\n// })\n// const ethSepolia = {\n//   name: \"Ethereum Sepolia\", // Name of the custom chain\n//   rpcUrl: \"https://eth-sepolia.g.alchemy.com/v2/b_u_y4r2bMnm-eyOCsCMMz16m4yseBXe\", // RPC URL of the custom chain\n//   chainId: 11155111, // Chain ID of the custom chain\n//   blockExplorerUrl: \"https://sepolia.etherscan.io/\" // Block explorer URL of the custom chain\n// };\n// const arbSepolia = {\n//   name: \"Arbitrum Sepolia\", \n//   rpcUrl: \"https://arb-sepolia.g.alchemy.com/v2/ihk6GnlMTtUd8q3O_OdcdMDcVWuBjKSf\", \n//   chainId: 421614, \n//   blockExplorerUrl: \"https://sepolia-explorer.arbitrum.io\"\n// };\n// const { chains, provider, webSocketProvider } = configureChains(\n//   [\n//     chain.goerli,\n//     // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'\n//     //   ? [chain.goerli]\n//     //   : []),\n//     arbSepolia,\n//     ethSepolia\n//   ],\n//   [\n//     alchemyProvider({ alchemyId: 'FGW1M0dpueWNm3_6nFCgUvOK8sGNJfoM' }),\n//     publicProvider(),\n//   ]\n// );\nconst { wallets  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"RainbowKit Mint NFT Demo\",\n    chains\n});\nconst demoAppInfo = {\n    appName: \"RainbowKit Mint NFT Demo\"\n};\nconst connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.connectorsForWallets)([\n    ...wallets,\n    {\n        groupName: \"Other\",\n        wallets: [\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.wallet.argent({\n                chains\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.wallet.trust({\n                chains\n            })\n        ]\n    }, \n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider,\n    webSocketProvider\n});\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: amount , 1: setAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"0\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n            coolMode: true,\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.darkTheme)(),\n            appInfo: demoAppInfo,\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/tanishdesai37/Downloads/git-test-starportal/StarPortal/pages/_app.tsx\",\n                lineNumber: 145,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/tanishdesai37/Downloads/git-test-starportal/StarPortal/pages/_app.tsx\",\n            lineNumber: 144,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tanishdesai37/Downloads/git-test-starportal/StarPortal/pages/_app.tsx\",\n        lineNumber: 143,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdoQyxtREFBWSxDQUFDO0lBQy9CaUMsV0FBVyxFQUFFLElBQUk7SUFDakJMLFVBQVU7SUFDVlQsUUFBUTtJQUNSQyxpQkFBaUI7Q0FDbEIsQ0FBQztBQUVGLFNBQVNjLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ25ELE1BQU0sRUE1SU4sR0E0SU9DLE1BQU0sR0E1SWIsR0E0SWNDLFNBQVMsTUFBSWhDLCtDQUFRLENBQUMsR0FBRyxDQUFDO0lBQ3RDLHFCQUNFLDhEQUFDSiw4Q0FBVztRQUFDcUMsTUFBTSxFQUFFUCxXQUFXO2tCQUM5Qiw0RUFBQ3JDLHNFQUFrQjtZQUFDNkMsUUFBUTtZQUFDQyxLQUFLLEVBQUUxQyxpRUFBUyxFQUFFO1lBQUUyQyxPQUFPLEVBQUVmLFdBQVc7WUFBRVQsTUFBTSxFQUFFQSxNQUFNO3NCQUNuRiw0RUFBQ2lCLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNUOzs7OztZQUNULENBQ2Q7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLW5leHQtbWludC1uZnQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9nbG9iYWwuY3NzJztcbmltcG9ydCAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQge1xuICBSYWluYm93S2l0UHJvdmlkZXIsXG4gIGdldERlZmF1bHRXYWxsZXRzLFxuICBjb25uZWN0b3JzRm9yV2FsbGV0cyxcbiAgd2FsbGV0LFxuICBkYXJrVGhlbWUsXG4gIENvbm5lY3RCdXR0b24sXG59IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuLy8gaW1wb3J0IHsgdXNlQmFsYW5jZSB9IGZyb20gJ3dhZ21pL2hvb2tzJztcblxuaW1wb3J0ICcuL2Nzcy9Ub2tlblRyYW5zYWN0aW9uUGFnZS5tb2R1bGUuY3NzJzsgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSB0aGUgY29ycmVzcG9uZGluZyBDU1MgZmlsZVxuaW1wb3J0IHsgY2hhaW4sIGNyZWF0ZUNsaWVudCwgY29uZmlndXJlQ2hhaW5zLCBXYWdtaUNvbmZpZywgZGVmYXVsdENoYWlucyB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9hbGNoZW15JztcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XG5cbmltcG9ydCB7IGluZnVyYVByb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL2luZnVyYSdcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy9pbmplY3RlZCdcblxuaW1wb3J0IHsganNvblJwY1Byb3ZpZGVyIH0gZnJvbSAnQHdhZ21pL2NvcmUvcHJvdmlkZXJzL2pzb25ScGMnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcblxuLy8gRGVmaW5pbmcgYWxsIHRoZSBjaGFpbnMgXG5jb25zdCBjdXN0b21DaGFpbnMgPSBbXG4gIHtcbiAgICBpZDogMTExNTUxMTEsXG4gICAgbmFtZTogJ0V0aGVyZXVtIFNlcG9saWEgVGVzdG5ldCcsXG4gICAgbmV0d29yazogJ2V0aFNlcG9saWEnLFxuICAgIG5hdGl2ZUN1cnJlbmN5OiB7IG5hbWU6ICdFdGhlcmV1bScsIHN5bWJvbDogJ0VUSCcsIGRlY2ltYWxzOiAxOCB9LFxuICAgIHJwY1VybHM6IHtcbiAgICAgIGN1c3RvbTogJ2h0dHBzOi8vc2Vwb2xpYS5pbmZ1cmEuaW8vdjMvMmQzYjYwMzA5ZDg2NGUwNTg2MjE0N2U1MzAyNDNlYzYnXG4gICAgfSxcbiAgICB0ZXN0bmV0OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBpZDogNDIxNjE0LFxuICAgIG5hbWU6ICdBcmJpdHJ1bSBTZXBvbGlhIFRlc3RuZXQnLFxuICAgIG5ldHdvcms6ICdhcmJTZXBvbGlhJyxcbiAgICBuYXRpdmVDdXJyZW5jeTogeyBuYW1lOiAnRXRoZXJldW0nLCBzeW1ib2w6ICdFVEgnLCBkZWNpbWFsczogMTggfSxcbiAgICBycGNVcmxzOiB7XG4gICAgICBjdXN0b206ICdodHRwczovL2FyYml0cnVtLXNlcG9saWEuaW5mdXJhLmlvL3YzLzJkM2I2MDMwOWQ4NjRlMDU4NjIxNDdlNTMwMjQzZWM2J1xuICAgIH0sXG4gICAgdGVzdG5ldDogdHJ1ZVxuICB9XG5dXG5cbmNvbnN0IGluZnVyYUlkID0gJzJkM2I2MDMwOWQ4NjRlMDU4NjIxNDdlNTMwMjQzZWM2JztcblxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyLCB3ZWJTb2NrZXRQcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKGN1c3RvbUNoYWlucywgW1xuICBqc29uUnBjUHJvdmlkZXIoe1xuICAgIHJwYzogKGNoYWluKSA9PiAoe1xuICAgICAgaHR0cDogY2hhaW4ucnBjVXJscy5jdXN0b20sIC8vIEFzc3VtaW5nICdjdXN0b20nIGlzIHRoZSBrZXkgZm9yIHRoZSBSUEMgVVJMIGluIGVhY2ggY2hhaW4gb2JqZWN0XG4gICAgfSlcbiAgfSlcbl0sXG5bXG4gIGFsY2hlbXlQcm92aWRlcih7IGFsY2hlbXlJZDogJ0ZHVzFNMGRwdWVXTm0zXzZuRkNnVXZPSzhzR05KZm9NJyB9KSxcbiAgcHVibGljUHJvdmlkZXIoKSxcbl1cbilcblxuLy8gY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoY3VzdG9tQ2hhaW5zLCBbXG4vLyAgIGpzb25ScGNQcm92aWRlcih7XG4vLyAgICAgdXJsOiAnaHR0cHM6Ly9zZXBvbGlhLmluZnVyYS5pby92MycsIC8vIFRoaXMgVVJMIGlzIHJlcXVpcmVkIGZvciB0aGUgRXRoZXJldW0gU2Vwb2xpYSBUZXN0bmV0XG4vLyAgIH0pLFxuLy8gICBqc29uUnBjUHJvdmlkZXIoe1xuLy8gICAgIHVybDogJ2h0dHBzOi8vYXJiaXRydW0tc2Vwb2xpYS5pbmZ1cmEuaW8vdjMnLCAvLyBUaGlzIFVSTCBpcyByZXF1aXJlZCBmb3IgdGhlIEFyYml0cnVtIFNlcG9saWEgVGVzdG5ldFxuLy8gICB9KSxcbi8vIF0pXG5cbi8vIGNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbi8vICAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4vLyAgIGNvbm5lY3RvcnM6IFtuZXcgSW5qZWN0ZWRDb25uZWN0b3IoeyBjaGFpbnMgfSldLFxuLy8gICBwcm92aWRlcixcbi8vIH0pXG5cbi8vIGNvbnN0IGV0aFNlcG9saWEgPSB7XG4vLyAgIG5hbWU6IFwiRXRoZXJldW0gU2Vwb2xpYVwiLCAvLyBOYW1lIG9mIHRoZSBjdXN0b20gY2hhaW5cbi8vICAgcnBjVXJsOiBcImh0dHBzOi8vZXRoLXNlcG9saWEuZy5hbGNoZW15LmNvbS92Mi9iX3VfeTRyMmJNbm0tZXlPQ3NDTU16MTZtNHlzZUJYZVwiLCAvLyBSUEMgVVJMIG9mIHRoZSBjdXN0b20gY2hhaW5cbi8vICAgY2hhaW5JZDogMTExNTUxMTEsIC8vIENoYWluIElEIG9mIHRoZSBjdXN0b20gY2hhaW5cbi8vICAgYmxvY2tFeHBsb3JlclVybDogXCJodHRwczovL3NlcG9saWEuZXRoZXJzY2FuLmlvL1wiIC8vIEJsb2NrIGV4cGxvcmVyIFVSTCBvZiB0aGUgY3VzdG9tIGNoYWluXG4vLyB9O1xuXG4vLyBjb25zdCBhcmJTZXBvbGlhID0ge1xuLy8gICBuYW1lOiBcIkFyYml0cnVtIFNlcG9saWFcIiwgXG4vLyAgIHJwY1VybDogXCJodHRwczovL2FyYi1zZXBvbGlhLmcuYWxjaGVteS5jb20vdjIvaWhrNkdubE1UdFVkOHEzT19PZGNkTURjVld1QmpLU2ZcIiwgXG4vLyAgIGNoYWluSWQ6IDQyMTYxNCwgXG4vLyAgIGJsb2NrRXhwbG9yZXJVcmw6IFwiaHR0cHM6Ly9zZXBvbGlhLWV4cGxvcmVyLmFyYml0cnVtLmlvXCJcbi8vIH07XG5cblxuLy8gY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyLCB3ZWJTb2NrZXRQcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuLy8gICBbXG4vLyAgICAgY2hhaW4uZ29lcmxpLFxuXG4vLyAgICAgLy8gLi4uKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VOQUJMRV9URVNUTkVUUyA9PT0gJ3RydWUnXG4vLyAgICAgLy8gICA/IFtjaGFpbi5nb2VybGldXG4vLyAgICAgLy8gICA6IFtdKSxcblxuLy8gICAgIGFyYlNlcG9saWEsXG4vLyAgICAgZXRoU2Vwb2xpYVxuLy8gICBdLFxuXG4vLyAgIFtcbi8vICAgICBhbGNoZW15UHJvdmlkZXIoeyBhbGNoZW15SWQ6ICdGR1cxTTBkcHVlV05tM182bkZDZ1V2T0s4c0dOSmZvTScgfSksXG4vLyAgICAgcHVibGljUHJvdmlkZXIoKSxcbi8vICAgXVxuLy8gKTtcblxuXG5cbmNvbnN0IHsgd2FsbGV0cyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBhcHBOYW1lOiAnUmFpbmJvd0tpdCBNaW50IE5GVCBEZW1vJyxcbiAgY2hhaW5zLFxufSk7XG5cbmNvbnN0IGRlbW9BcHBJbmZvID0ge1xuICBhcHBOYW1lOiAnUmFpbmJvd0tpdCBNaW50IE5GVCBEZW1vJyxcbn07XG5cbmNvbnN0IGNvbm5lY3RvcnMgPSBjb25uZWN0b3JzRm9yV2FsbGV0cyhbXG4gIC4uLndhbGxldHMsXG4gIHtcbiAgICBncm91cE5hbWU6ICdPdGhlcicsXG4gICAgd2FsbGV0czogW3dhbGxldC5hcmdlbnQoeyBjaGFpbnMgfSksIHdhbGxldC50cnVzdCh7IGNoYWlucyB9KV0sXG4gIH0sXG5dKTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXIsXG4gIHdlYlNvY2tldFByb3ZpZGVyLFxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbmNvbnN0IFthbW91bnQsc2V0QW1vdW50XSA9IHVzZVN0YXRlKFwiMFwiKTtcbiAgcmV0dXJuIChcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNvb2xNb2RlIHRoZW1lPXtkYXJrVGhlbWUoKX0gYXBwSW5mbz17ZGVtb0FwcEluZm99IGNoYWlucz17Y2hhaW5zfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJjb25uZWN0b3JzRm9yV2FsbGV0cyIsIndhbGxldCIsImRhcmtUaGVtZSIsImNyZWF0ZUNsaWVudCIsImNvbmZpZ3VyZUNoYWlucyIsIldhZ21pQ29uZmlnIiwiYWxjaGVteVByb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJqc29uUnBjUHJvdmlkZXIiLCJ1c2VTdGF0ZSIsImN1c3RvbUNoYWlucyIsImlkIiwibmFtZSIsIm5ldHdvcmsiLCJuYXRpdmVDdXJyZW5jeSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImN1c3RvbSIsInRlc3RuZXQiLCJpbmZ1cmFJZCIsImNoYWlucyIsInByb3ZpZGVyIiwid2ViU29ja2V0UHJvdmlkZXIiLCJycGMiLCJjaGFpbiIsImh0dHAiLCJhbGNoZW15SWQiLCJ3YWxsZXRzIiwiYXBwTmFtZSIsImRlbW9BcHBJbmZvIiwiY29ubmVjdG9ycyIsImdyb3VwTmFtZSIsImFyZ2VudCIsInRydXN0Iiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYW1vdW50Iiwic2V0QW1vdW50IiwiY2xpZW50IiwiY29vbE1vZGUiLCJ0aGVtZSIsImFwcEluZm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/global.css":
/*!**************************!*\
  !*** ./pages/global.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "@wagmi/core/providers/jsonRpc":
/*!************************************************!*\
  !*** external "@wagmi/core/providers/jsonRpc" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@wagmi/core/providers/jsonRpc");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();