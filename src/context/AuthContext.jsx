import { createContext, useState } from "react";

export const AuthContext = createContext();
const initialValues = [
    { username: "", phoneNumber: "", gender: "NO INFO" },
];

export const AuthContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [data, setData] = useState(initialValues);

    const values = {
        setName,
        name,
        setData,
        data,
    };
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};
