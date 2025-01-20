import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";  // 📌 Comentamos el Navbar por ahora
import Home from "./components/Home";
import Login from "./components/Login";
import Notes from "./components/Notes";
import ProtectedRoute from "./components/ProtectedRoute";
import { getAuthToken } from "./api";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!getAuthToken());

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            {/* <Navbar />  {/* 📌 Comenta el componente de Navbar */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/notes" element={<Notes />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
