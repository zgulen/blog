import { createContext, useState } from "react";

export const AuthContext = createContext();
export const initialValues = [
    {
        title: "React",
        content: "",
        imageUrl: "",
        email:""
    },
];

export const AuthContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [data, setData] = useState(initialValues);
    const [userEmail, setUserEmail] = useState("")

    const values = {
        setName,
        name,
        setData,
        data,
        userEmail,
        setUserEmail
    };
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};
