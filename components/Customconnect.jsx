import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { chakra,Box,Image,Text,Button } from '@chakra-ui/react'
import { useDataListContext } from './provider/DataProvider';
function Customconnect(props) {
    const dir  = props.dir
  return (
    <>
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

            if(connected){
              const dataContext = useDataListContext();
              dataContext.setUserBalance(parseFloat(account.displayBalance.split(" ")[0]));
            }
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal} type="button" color={"white"} backgroundColor={"#737373"} borderRadius={"2rem"}>
                    Connect Wallet
                  </Button>
                );
              }


              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} type="button" color={"white"} backgroundColor={"#737373"} borderRadius={"2rem"}>
                    Wrong network
                  </Button>
                );
              }

              return (
                <Box height={dir=="column" ? "5rem" : "auto"} width={dir=="column" ? "11rem" : "auto"} style={{ display: 'flex', gap: 12,flexDirection:dir}} >
                  <Button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                    color={"white"}
                    backgroundColor={"#737373"} 
                    borderRadius={"2rem"}
                    fontSize={dir=="column" ? "0.8rem" : "auto"}
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </Button>

                  <Button onClick={openAccountModal} type="button"
                  color={"white"} 
                  backgroundColor={"#737373"} 
                  borderRadius={"2rem"}
                  fontSize={dir=="column" ? "0.8rem" : "auto"}
                  >
                    Bal: {account.displayBalance
                      ? ` ${account.displayBalance}`
                      : ''}
                  </Button>
                </Box>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
    </>
  )
}

export default Customconnect