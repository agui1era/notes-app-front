import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";
const TOKEN_STORAGE_KEY = "auth_token"; // 📌 Debe ser el mismo usado en login

const getAuthHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem(TOKEN_STORAGE_KEY)}`,
});

// 📌 Obtener todas las notas
export const getNotes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/notes`, {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        console.error("Error al obtener notas:", error);
        return [];
    }
};

// 📌 Crear una nueva nota
export const createNote = async (title, content) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/notes`, { title, content }, {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        console.error("Error al crear nota:", error);
        return null;
    }
};

// 📌 Editar una nota existente
export const updateNote = async (id, title, content, updated_at) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/notes/${id}`, 
            { title, content, updated_at },
            { headers: getAuthHeaders() }
        );
        return response.data;
    } catch (error) {
        console.error("Error al actualizar nota:", error);
        return null;
    }
};

// 📌 Eliminar una nota
export const deleteNote = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/api/notes/${id}`, {
            headers: getAuthHeaders(),
        });
        return true;
    } catch (error) {
        console.error("Error al eliminar nota:", error);
        return false;
    }
};

// 🔹 **Faltaban estas funciones: `login`, `getAuthToken`, `logout`**
export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/login`, { username, password });
        if (response.data.access_token) {
            localStorage.setItem(TOKEN_STORAGE_KEY, response.data.access_token);
            return { success: true, token: response.data.access_token };
        } else {
            return { success: false, message: "Credenciales incorrectas" };
        }
    } catch (error) {
        console.error("Error en login:", error);
        return { success: false, message: error.response?.data?.detail || "Error en autenticación" };
    }
};

// 📌 Obtener el token almacenado
export const getAuthToken = () => localStorage.getItem(TOKEN_STORAGE_KEY);

// 📌 Cerrar sesión
export const logout = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
};
