import React from "react";
import {
    Route,
    Routes,
    BrowserRouter,
    Navigate,
    Outlet,
} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import NavBar from "../components/NavBar";
import UpdateBlog from "../pages/UpdateBlog";
import Details from "../pages/Details";
import toast from "react-hot-toast"

const Router = () => {
    function PrivateRouter() {
        return sessionStorage.getItem("user") ? (
            <Outlet />
        ) : (
            toast.error("Please Login"),
            <Navigate to="/login" replace />
        );
    }
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="new" element={<UpdateBlog />} />

                <Route path="/details/:id" element={<PrivateRouter />}>
                    <Route path="" element={<Details />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
