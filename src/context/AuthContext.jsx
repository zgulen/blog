import { createContext, useState } from "react";

export const AuthContext = createContext();
export const initialValues = [
    {
        title: "React",
        content: "",
        imageUrl: "",
    },
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
