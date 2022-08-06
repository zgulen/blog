import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login"
import DashBoard from "../pages/DashBoard"
import NavBar from "../components/NavBar"


const Router = () => {
    return (
        <BrowserRouter>
                <NavBar/>
            <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
