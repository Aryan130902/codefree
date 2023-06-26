import { createContext, useState } from "react";

//define variable DataContext which stores the context
export const DataContext = createContext(null);

//passing children as a prop which defines the children components that are wrapped under DataProvider.
//DataProvider is the component which is wrapped around children component so that they can access the context.

const DataProvider = ({ children }) => {
    const [ account, setAccount ] = useState({ email: '', username: '' });
        
    return (
        //value is the prop passed which contains the state and function to update the state.
        <DataContext.Provider value={{ 
            account, 
            setAccount 
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
