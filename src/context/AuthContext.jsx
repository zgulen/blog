import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [name, SetName] = useState("")

    const values = {
        SetName,
    };
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};
