import { createContext, useState } from "react";



export const StateContext = createContext();


function StateContextProvider({children}) {

    const[count, setCount] = useState(0)

    return(
        <StateContext.Provider value={{count, setCount}} >
            {children}
        </StateContext.Provider>
    )

    
}

export default StateContextProvider;