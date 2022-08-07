import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { createUser } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { name, setName } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(name, email, password, navigate);
    };

    const inputStyling = {
        boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        borderRadius: "7px",
        backgroundColor: "rgba(161, 199, 224, .4)",
    };
    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 65px)",
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                id="outlined-basic"
                label="Name"
                variant="filled"
                onChange={(e) => setName(e.target.value)}
                sx={inputStyling}
            />
            <TextField
                id="outlined-basic"
                label="Email"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
                sx={inputStyling}
            />

            <TextField
                type="password"
                id="outlined-basic"
                label="Password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
                sx={inputStyling}
            />
            <div style={{ marginTop: "1rem", textAlign: "left" }}>
                <Button type="submit" variant="contained">
                    Register
                </Button>
            </div>
        </Box>
    );
}
