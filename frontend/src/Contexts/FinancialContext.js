import { createContext, useState } from "react";

const FinancialDataContext = createContext()

export const FinancialDataProvider = ({ children }) => {
    const [dataContext, setDataContext] = useState({
        "inputs": {},
        "results": {}
    })

    return (
        <FinancialDataContext.Provider value={{ dataContext, setDataContext }}>
            {children}
        </FinancialDataContext.Provider>
    )
}

export default FinancialDataContext;