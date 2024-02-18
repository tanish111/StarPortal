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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.css */ \"./pages/global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wagmi/core/providers/jsonRpc */ \"@wagmi/core/providers/jsonRpc\");\n/* harmony import */ var _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// import { useBalance } from 'wagmi/hooks';\n // Make sure to create the corresponding CSS file\n\n\n\n\n\n// Defining all the chains \nconst customChains = [\n    {\n        id: 11155111,\n        name: \"Ethereum Sepolia Testnet\",\n        network: \"ethSepolia\",\n        nativeCurrency: {\n            name: \"Ethereum\",\n            symbol: \"ETH\",\n            decimals: 18\n        },\n        rpcUrls: {\n            custom: \"https://sepolia.infura.io/v3/2d3b60309d864e05862147e530243ec6\"\n        },\n        testnet: true\n    },\n    {\n        id: 421614,\n        name: \"Arbitrum Sepolia Testnet\",\n        network: \"arbSepolia\",\n        nativeCurrency: {\n            name: \"Ethereum\",\n            symbol: \"ETH\",\n            decimals: 18\n        },\n        rpcUrls: {\n            custom: \"https://arbitrum-sepolia.infura.io/v3/2d3b60309d864e05862147e530243ec6\"\n        },\n        testnet: true\n    }\n];\nconst infuraId = \"2d3b60309d864e05862147e530243ec6\";\nconst { chains , provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)(customChains, [\n    (0,_wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__.jsonRpcProvider)({\n        rpc: (chain)=>({\n                http: chain.rpcUrls.custom\n            })\n    })\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__.alchemyProvider)({\n        alchemyId: \"FGW1M0dpueWNm3_6nFCgUvOK8sGNJfoM\"\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)(), \n]);\n// const { chains, provider } = configureChains(customChains, [\n//   jsonRpcProvider({\n//     url: 'https://sepolia.infura.io/v3', // This URL is required for the Ethereum Sepolia Testnet\n//   }),\n//   jsonRpcProvider({\n//     url: 'https://arbitrum-sepolia.infura.io/v3', // This URL is required for the Arbitrum Sepolia Testnet\n//   }),\n// ])\n// const wagmiClient = createClient({\n//   autoConnect: true,\n//   connectors: [new InjectedConnector({ chains })],\n//   provider,\n// })\n// const ethSepolia = {\n//   name: \"Ethereum Sepolia\", // Name of the custom chain\n//   rpcUrl: \"https://eth-sepolia.g.alchemy.com/v2/b_u_y4r2bMnm-eyOCsCMMz16m4yseBXe\", // RPC URL of the custom chain\n//   chainId: 11155111, // Chain ID of the custom chain\n//   blockExplorerUrl: \"https://sepolia.etherscan.io/\" // Block explorer URL of the custom chain\n// };\n// const arbSepolia = {\n//   name: \"Arbitrum Sepolia\", \n//   rpcUrl: \"https://arb-sepolia.g.alchemy.com/v2/ihk6GnlMTtUd8q3O_OdcdMDcVWuBjKSf\", \n//   chainId: 421614, \n//   blockExplorerUrl: \"https://sepolia-explorer.arbitrum.io\"\n// };\n// const { chains, provider, webSocketProvider } = configureChains(\n//   [\n//     chain.goerli,\n//     // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'\n//     //   ? [chain.goerli]\n//     //   : []),\n//     arbSepolia,\n//     ethSepolia\n//   ],\n//   [\n//     alchemyProvider({ alchemyId: 'FGW1M0dpueWNm3_6nFCgUvOK8sGNJfoM' }),\n//     publicProvider(),\n//   ]\n// );\nconst { wallets  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"RainbowKit Mint NFT Demo\",\n    chains\n});\nconst demoAppInfo = {\n    appName: \"RainbowKit Mint NFT Demo\"\n};\nconst connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.connectorsForWallets)([\n    ...wallets,\n    {\n        groupName: \"Other\",\n        wallets: [\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.wallet.argent({\n                chains\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.wallet.trust({\n                chains\n            })\n        ]\n    }, \n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider,\n    webSocketProvider\n});\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: amount , 1: setAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"0\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n            appInfo: demoAppInfo,\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/tanishdesai37/Downloads/git-test-starportal/StarPortal/pages/_app.tsx\",\n                lineNumber: 144,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/tanishdesai37/Downloads/git-test-starportal/StarPortal/pages/_app.tsx\",\n            lineNumber: 143,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tanishdesai37/Downloads/git-test-starportal/StarPortal/pages/_app.tsx\",\n        lineNumber: 142,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdoQyxtREFBWSxDQUFDO0lBQy9CaUMsV0FBVyxFQUFFLElBQUk7SUFDakJMLFVBQVU7SUFDVlQsUUFBUTtJQUNSQyxpQkFBaUI7Q0FDbEIsQ0FBQztBQUVGLFNBQVNjLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ25ELE1BQU0sRUEzSU4sR0EySU9DLE1BQU0sR0EzSWIsR0EySWNDLFNBQVMsTUFBSWhDLCtDQUFRLENBQUMsR0FBRyxDQUFDO0lBQ3RDLHFCQUNFLDhEQUFDSiw4Q0FBVztRQUFDcUMsTUFBTSxFQUFFUCxXQUFXO2tCQUM5Qiw0RUFBQ3BDLHNFQUFrQjtZQUFDNEMsT0FBTyxFQUFFYixXQUFXO1lBQUVULE1BQU0sRUFBRUEsTUFBTTtzQkFDdEQsNEVBQUNpQixTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDVDs7Ozs7WUFDVCxDQUNkO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1uZXh0LW1pbnQtbmZ0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZ2xvYmFsLmNzcyc7XG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHtcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxuICBnZXREZWZhdWx0V2FsbGV0cyxcbiAgY29ubmVjdG9yc0ZvcldhbGxldHMsXG4gIHdhbGxldCxcbiAgQ29ubmVjdEJ1dHRvbixcbn0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG4vLyBpbXBvcnQgeyB1c2VCYWxhbmNlIH0gZnJvbSAnd2FnbWkvaG9va3MnO1xuXG5pbXBvcnQgJy4vY3NzL1Rva2VuVHJhbnNhY3Rpb25QYWdlLm1vZHVsZS5jc3MnOyAvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIHRoZSBjb3JyZXNwb25kaW5nIENTUyBmaWxlXG5pbXBvcnQgeyBjaGFpbiwgY3JlYXRlQ2xpZW50LCBjb25maWd1cmVDaGFpbnMsIFdhZ21pQ29uZmlnLCBkZWZhdWx0Q2hhaW5zIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgYWxjaGVteVByb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL2FsY2hlbXknO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvcHVibGljJztcblxuaW1wb3J0IHsgaW5mdXJhUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvaW5mdXJhJ1xuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL2luamVjdGVkJ1xuXG5pbXBvcnQgeyBqc29uUnBjUHJvdmlkZXIgfSBmcm9tICdAd2FnbWkvY29yZS9wcm92aWRlcnMvanNvblJwYydcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuXG4vLyBEZWZpbmluZyBhbGwgdGhlIGNoYWlucyBcbmNvbnN0IGN1c3RvbUNoYWlucyA9IFtcbiAge1xuICAgIGlkOiAxMTE1NTExMSxcbiAgICBuYW1lOiAnRXRoZXJldW0gU2Vwb2xpYSBUZXN0bmV0JyxcbiAgICBuZXR3b3JrOiAnZXRoU2Vwb2xpYScsXG4gICAgbmF0aXZlQ3VycmVuY3k6IHsgbmFtZTogJ0V0aGVyZXVtJywgc3ltYm9sOiAnRVRIJywgZGVjaW1hbHM6IDE4IH0sXG4gICAgcnBjVXJsczoge1xuICAgICAgY3VzdG9tOiAnaHR0cHM6Ly9zZXBvbGlhLmluZnVyYS5pby92My8yZDNiNjAzMDlkODY0ZTA1ODYyMTQ3ZTUzMDI0M2VjNidcbiAgICB9LFxuICAgIHRlc3RuZXQ6IHRydWVcbiAgfSxcbiAge1xuICAgIGlkOiA0MjE2MTQsXG4gICAgbmFtZTogJ0FyYml0cnVtIFNlcG9saWEgVGVzdG5ldCcsXG4gICAgbmV0d29yazogJ2FyYlNlcG9saWEnLFxuICAgIG5hdGl2ZUN1cnJlbmN5OiB7IG5hbWU6ICdFdGhlcmV1bScsIHN5bWJvbDogJ0VUSCcsIGRlY2ltYWxzOiAxOCB9LFxuICAgIHJwY1VybHM6IHtcbiAgICAgIGN1c3RvbTogJ2h0dHBzOi8vYXJiaXRydW0tc2Vwb2xpYS5pbmZ1cmEuaW8vdjMvMmQzYjYwMzA5ZDg2NGUwNTg2MjE0N2U1MzAyNDNlYzYnXG4gICAgfSxcbiAgICB0ZXN0bmV0OiB0cnVlXG4gIH1cbl1cblxuY29uc3QgaW5mdXJhSWQgPSAnMmQzYjYwMzA5ZDg2NGUwNTg2MjE0N2U1MzAyNDNlYzYnO1xuXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIsIHdlYlNvY2tldFByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoY3VzdG9tQ2hhaW5zLCBbXG4gIGpzb25ScGNQcm92aWRlcih7XG4gICAgcnBjOiAoY2hhaW4pID0+ICh7XG4gICAgICBodHRwOiBjaGFpbi5ycGNVcmxzLmN1c3RvbSwgLy8gQXNzdW1pbmcgJ2N1c3RvbScgaXMgdGhlIGtleSBmb3IgdGhlIFJQQyBVUkwgaW4gZWFjaCBjaGFpbiBvYmplY3RcbiAgICB9KVxuICB9KVxuXSxcbltcbiAgYWxjaGVteVByb3ZpZGVyKHsgYWxjaGVteUlkOiAnRkdXMU0wZHB1ZVdObTNfNm5GQ2dVdk9LOHNHTkpmb00nIH0pLFxuICBwdWJsaWNQcm92aWRlcigpLFxuXVxuKVxuXG4vLyBjb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhjdXN0b21DaGFpbnMsIFtcbi8vICAganNvblJwY1Byb3ZpZGVyKHtcbi8vICAgICB1cmw6ICdodHRwczovL3NlcG9saWEuaW5mdXJhLmlvL3YzJywgLy8gVGhpcyBVUkwgaXMgcmVxdWlyZWQgZm9yIHRoZSBFdGhlcmV1bSBTZXBvbGlhIFRlc3RuZXRcbi8vICAgfSksXG4vLyAgIGpzb25ScGNQcm92aWRlcih7XG4vLyAgICAgdXJsOiAnaHR0cHM6Ly9hcmJpdHJ1bS1zZXBvbGlhLmluZnVyYS5pby92MycsIC8vIFRoaXMgVVJMIGlzIHJlcXVpcmVkIGZvciB0aGUgQXJiaXRydW0gU2Vwb2xpYSBUZXN0bmV0XG4vLyAgIH0pLFxuLy8gXSlcblxuLy8gY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuLy8gICBhdXRvQ29ubmVjdDogdHJ1ZSxcbi8vICAgY29ubmVjdG9yczogW25ldyBJbmplY3RlZENvbm5lY3Rvcih7IGNoYWlucyB9KV0sXG4vLyAgIHByb3ZpZGVyLFxuLy8gfSlcblxuLy8gY29uc3QgZXRoU2Vwb2xpYSA9IHtcbi8vICAgbmFtZTogXCJFdGhlcmV1bSBTZXBvbGlhXCIsIC8vIE5hbWUgb2YgdGhlIGN1c3RvbSBjaGFpblxuLy8gICBycGNVcmw6IFwiaHR0cHM6Ly9ldGgtc2Vwb2xpYS5nLmFsY2hlbXkuY29tL3YyL2JfdV95NHIyYk1ubS1leU9Dc0NNTXoxNm00eXNlQlhlXCIsIC8vIFJQQyBVUkwgb2YgdGhlIGN1c3RvbSBjaGFpblxuLy8gICBjaGFpbklkOiAxMTE1NTExMSwgLy8gQ2hhaW4gSUQgb2YgdGhlIGN1c3RvbSBjaGFpblxuLy8gICBibG9ja0V4cGxvcmVyVXJsOiBcImh0dHBzOi8vc2Vwb2xpYS5ldGhlcnNjYW4uaW8vXCIgLy8gQmxvY2sgZXhwbG9yZXIgVVJMIG9mIHRoZSBjdXN0b20gY2hhaW5cbi8vIH07XG5cbi8vIGNvbnN0IGFyYlNlcG9saWEgPSB7XG4vLyAgIG5hbWU6IFwiQXJiaXRydW0gU2Vwb2xpYVwiLCBcbi8vICAgcnBjVXJsOiBcImh0dHBzOi8vYXJiLXNlcG9saWEuZy5hbGNoZW15LmNvbS92Mi9paGs2R25sTVR0VWQ4cTNPX09kY2RNRGNWV3VCaktTZlwiLCBcbi8vICAgY2hhaW5JZDogNDIxNjE0LCBcbi8vICAgYmxvY2tFeHBsb3JlclVybDogXCJodHRwczovL3NlcG9saWEtZXhwbG9yZXIuYXJiaXRydW0uaW9cIlxuLy8gfTtcblxuXG4vLyBjb25zdCB7IGNoYWlucywgcHJvdmlkZXIsIHdlYlNvY2tldFByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4vLyAgIFtcbi8vICAgICBjaGFpbi5nb2VybGksXG5cbi8vICAgICAvLyAuLi4ocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU5BQkxFX1RFU1RORVRTID09PSAndHJ1ZSdcbi8vICAgICAvLyAgID8gW2NoYWluLmdvZXJsaV1cbi8vICAgICAvLyAgIDogW10pLFxuXG4vLyAgICAgYXJiU2Vwb2xpYSxcbi8vICAgICBldGhTZXBvbGlhXG4vLyAgIF0sXG5cbi8vICAgW1xuLy8gICAgIGFsY2hlbXlQcm92aWRlcih7IGFsY2hlbXlJZDogJ0ZHVzFNMGRwdWVXTm0zXzZuRkNnVXZPSzhzR05KZm9NJyB9KSxcbi8vICAgICBwdWJsaWNQcm92aWRlcigpLFxuLy8gICBdXG4vLyApO1xuXG5cblxuY29uc3QgeyB3YWxsZXRzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6ICdSYWluYm93S2l0IE1pbnQgTkZUIERlbW8nLFxuICBjaGFpbnMsXG59KTtcblxuY29uc3QgZGVtb0FwcEluZm8gPSB7XG4gIGFwcE5hbWU6ICdSYWluYm93S2l0IE1pbnQgTkZUIERlbW8nLFxufTtcblxuY29uc3QgY29ubmVjdG9ycyA9IGNvbm5lY3RvcnNGb3JXYWxsZXRzKFtcbiAgLi4ud2FsbGV0cyxcbiAge1xuICAgIGdyb3VwTmFtZTogJ090aGVyJyxcbiAgICB3YWxsZXRzOiBbd2FsbGV0LmFyZ2VudCh7IGNoYWlucyB9KSwgd2FsbGV0LnRydXN0KHsgY2hhaW5zIH0pXSxcbiAgfSxcbl0pO1xuXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlcixcbiAgd2ViU29ja2V0UHJvdmlkZXIsXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuY29uc3QgW2Ftb3VudCxzZXRBbW91bnRdID0gdXNlU3RhdGUoXCIwXCIpO1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgYXBwSW5mbz17ZGVtb0FwcEluZm99IGNoYWlucz17Y2hhaW5zfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJjb25uZWN0b3JzRm9yV2FsbGV0cyIsIndhbGxldCIsImNyZWF0ZUNsaWVudCIsImNvbmZpZ3VyZUNoYWlucyIsIldhZ21pQ29uZmlnIiwiYWxjaGVteVByb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJqc29uUnBjUHJvdmlkZXIiLCJ1c2VTdGF0ZSIsImN1c3RvbUNoYWlucyIsImlkIiwibmFtZSIsIm5ldHdvcmsiLCJuYXRpdmVDdXJyZW5jeSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImN1c3RvbSIsInRlc3RuZXQiLCJpbmZ1cmFJZCIsImNoYWlucyIsInByb3ZpZGVyIiwid2ViU29ja2V0UHJvdmlkZXIiLCJycGMiLCJjaGFpbiIsImh0dHAiLCJhbGNoZW15SWQiLCJ3YWxsZXRzIiwiYXBwTmFtZSIsImRlbW9BcHBJbmZvIiwiY29ubmVjdG9ycyIsImdyb3VwTmFtZSIsImFyZ2VudCIsInRydXN0Iiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYW1vdW50Iiwic2V0QW1vdW50IiwiY2xpZW50IiwiYXBwSW5mbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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