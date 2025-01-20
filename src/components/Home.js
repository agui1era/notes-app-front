import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken } from "../api";

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div className="home-container">
            <h1>Bienvenido al Gestor de Notas</h1>
            {getAuthToken() ? (
                <button onClick={() => navigate("/notes")}>Ir a mis notas</button>
            ) : (
                <button onClick={() => navigate("/login")}>Iniciar sesión</button>
            )}
        </div>
    );
};

export default Home;
