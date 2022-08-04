import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { createUser } from "../utils/firebase";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(email, password);
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
                mt: "20%",
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
            />
            <TextField
                id="outlined-basic"
                label="Email"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                type="password"
                id="outlined-basic"
                label="Password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{ marginTop: "1rem", textAlign: "left" }}>
                <Button type="submit" variant="contained">
                    Register
                </Button>
            </div>
        </Box>
    );
}
