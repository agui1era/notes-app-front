import React, { useState } from "react";
import Login from "./components/Login";
import { getAuthToken, logout } from "./api"; // Corregido


const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!getAuthToken());

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
    };

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <h2>Bienvenido</h2>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
            ) : (
                <Login onLoginSuccess={() => setIsAuthenticated(true)} />
            )}
        </div>
    );
};

export default App;
