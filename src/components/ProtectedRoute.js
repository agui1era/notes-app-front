import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthToken } from "../api";

const ProtectedRoute = () => {
    return getAuthToken() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
