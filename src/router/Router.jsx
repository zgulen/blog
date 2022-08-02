import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "../pages/Register";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
