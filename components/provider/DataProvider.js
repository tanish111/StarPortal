import React, { useContext, useState } from 'react';
import {networkToContractAddressMap} from "../../GlobalConts/global"
const DataContext = React.createContext();
const DataProvider = ({children}) => {
    const networks = Object.keys(networkToContractAddressMap); // Predefined list of networks\
    const [amount, setAmount] = useState("0"); // Amount to send
    const [selectedSrcNetwork, setSelectedSrcNetwork] = useState(networks[0]); // Default Source network
    const [selectedDstNetwork, setSelectedDstNetwork] = useState(networks[1]); // Default Destination network
    return (
        <DataContext.Provider value={{amount,setAmount,selectedSrcNetwork,setSelectedSrcNetwork,selectedDstNetwork,setSelectedDstNetwork}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataListContext = () => React.useContext(DataContext)

export default DataProvider