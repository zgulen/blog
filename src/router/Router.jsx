import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
