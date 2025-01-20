
# 🎯 Gestor de Notas - Frontend - README

## 🚀 Descripción del Proyecto
Este es el **frontend** de un proyecto de gestión de notas utilizando **React**. El frontend permite a los usuarios iniciar sesión, gestionar notas (crear, editar, eliminar) y visualizarlas.

## 🛠 Tecnologías Utilizadas
- **Frontend**: React, Axios, React Router DOM
- **Autenticación**: JWT (JSON Web Tokens)

## 🔥 Características
- **Inicio de sesión** con JWT.
- **CRUD de notas** (Crear, Leer, Actualizar, Eliminar).
- **Rutas protegidas** para que solo los usuarios autenticados puedan acceder a las notas.

## ⚙️ Instrucciones para Correr el Proyecto (Frontend)

### 1️⃣ Clonar el Repositorio
Clona el repositorio en tu máquina local:
```bash
git clone https://github.com/tu-usuario/gestor-de-notas-front.git
cd gestor-de-notas-front
```

### 2️⃣ Instalar Dependencias
Instala las dependencias necesarias con npm:
```bash
npm install
```

### 3️⃣ Configurar Variables de Entorno
Asegúrate de configurar las variables de entorno necesarias en un archivo `.env`:
```bash
REACT_APP_API_BASE_URL=http://localhost:8000
REACT_APP_TOKEN_STORAGE_KEY=auth_token
```
Estas variables indican la URL base para las peticiones API y la clave para almacenar el token JWT.

### 4️⃣ Ejecutar el Proyecto
Inicia el servidor de desarrollo:
```bash
npm start
```
Esto abrirá la aplicación en `http://localhost:3000`.

## 📑 **APIs Utilizadas en el Frontend**

### 📌 **API de Autenticación** (`/api/auth/login` y `/api/auth/register`)
#### **POST `/api/auth/login`**
Permite que un usuario inicie sesión y reciba un token JWT.

- **Datos requeridos**:
  ```json
  {
    "username": "test",
    "password": "password"
  }
  ```
- **Respuesta esperada**:
  ```json
  {
    "access_token": "token_jwt_aqui",
    "token_type": "bearer"
  }
  ```

#### **POST `/api/auth/register`**
Permite que un usuario se registre con un nuevo nombre de usuario y contraseña.

- **Datos requeridos**:
  ```json
  {
    "username": "nuevo_usuario",
    "password": "nueva_contraseña"
  }
  ```
- **Respuesta esperada**:
  ```json
  {
    "access_token": "token_jwt_aqui",
    "token_type": "bearer"
  }
  ```

---

### 📌 **API de Notas** (`/api/notes`)
#### **GET `/api/notes`**
Obtiene todas las notas del usuario autenticado.

- **Respuesta esperada**:
  ```json
  [
    {
      "id": 1,
      "title": "Nota 1",
      "content": "Contenido de la nota 1",
      "timestamp": "2025-01-20T12:00:00Z"
    },
    {
      "id": 2,
      "title": "Nota 2",
      "content": "Contenido de la nota 2",
      "timestamp": "2025-01-20T13:00:00Z"
    }
  ]
  ```

#### **POST `/api/notes`**
Crea una nueva nota para el usuario autenticado.

- **Datos requeridos**:
  ```json
  {
    "title": "Título de la nota",
    "content": "Contenido de la nota"
  }
  ```

#### **PUT `/api/notes/{id}`**
Actualiza una nota existente.

- **Datos requeridos**:
  ```json
  {
    "title": "Nuevo título",
    "content": "Nuevo contenido",
    "updated_at": "2025-01-20T14:00:00Z"
  }
  ```

#### **DELETE `/api/notes/{id}`**
Elimina una nota por su `id`.

---

## 🛠 Scripts del Proyecto

- **Iniciar el frontend**: `npm start`
- **Construir para producción**: `npm run build`
