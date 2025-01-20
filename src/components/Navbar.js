import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken, logout } from "../api";
import "./Navbar.css"; // Importamos los estilos

const Navbar = () => {
    const navigate = useNavigate();
    const isAuthenticated = getAuthToken();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <h2>Gestor de Notas</h2>
            {isAuthenticated ? (
                <button className="logout-button" onClick={handleLogout}>
                    Cerrar sesión
                </button>
            ) : (
                <button className="login-button" onClick={() => navigate("/login")}>
                    Iniciar sesión
                </button>
            )}
        </nav>
    );
};

export default Navbar;
