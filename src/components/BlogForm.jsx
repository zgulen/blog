import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AddUser } from "../utils/firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const BlogForm = () => {
    const { data, setData, userEmail } = useContext(AuthContext);
    const navigate = useNavigate()
    const inputStyling = {
        boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        borderRadius: "7px",
        backgroundColor: "rgba(161, 199, 224, .4)",
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData([{ ...data[0], [name]: value, email: userEmail }]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        AddUser(data); 
        navigate("/")
    };

    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "50vw" },
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
                name="title"
                onChange={handleChange}
                required
                id="outlined-basic"
                label="title"
                variant="filled"
                sx={inputStyling}
            />
            <TextField
                name="imageUrl"
                onChange={handleChange}
                required
                id="outlined-basic"
                label="image URL"
                variant="filled"
                sx={inputStyling}
            />
            <TextField
                name="content"
                onChange={handleChange}
                multiline={true}
                rows={5}
                className="content"
                required
                id="outlined-basic"
                label="Content"
                variant="filled"
                sx={inputStyling}
            />
            <div style={{ marginTop: "1rem", textAlign: "left" }}>
                <Button
                    type="submit"
                    variant="contained"
                >
                    Submit
                </Button>
            </div>
        </Box>
    );
};

export default BlogForm;
