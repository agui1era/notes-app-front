import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import "./Login.css";

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // 📌 Para redirigir después del login

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const result = await login(username, password);
        if (result.success) {
            console.log("Inicio de sesión exitoso");
            if (typeof onLoginSuccess === "function") {  // 📌 Asegura que onLoginSuccess es una función
                onLoginSuccess();
            }
            navigate("/notes"); // 📌 Redirigir al usuario a las notas
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;
