# 🎯 Note Manager - Frontend - README

## 🚀 Project Description
This is the **frontend** of a note management project using **React**. The frontend allows users to log in, manage notes (create, edit, delete), and view them.

## 🛠 Technologies Used
- **Frontend**: React, Axios, React Router DOM
- **Authentication**: JWT (JSON Web Tokens)

## 🔥 Features
- **Login** with JWT.
- **Note CRUD** (Create, Read, Update, Delete).
- **Protected routes** so only authenticated users can access notes.

## ⚙️ Instructions for Running the Project (Frontend)

### 1️⃣ Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/your-user/front-notes-manager.git
cd front-notes-manager
```

### 2️⃣ Install Dependencies
Install the necessary dependencies with npm:
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Make sure to configure the necessary environment variables in a `.env` file:
```bash
REACT_APP_API_BASE_URL=http://localhost:8000
REACT_APP_TOKEN_STORAGE_KEY=auth_token
```
These variables indicate the base URL for API requests and the key for storing the JWT token.

### 4️⃣ Run the Project
Start the development server:
```bash
npm start
```
This will open the application at `http://localhost:3000`.

## 📑 **APIs Used in the Frontend**

### 📌 **Authentication API** (`/api/auth/login` and `/api/auth/register`)
#### **POST `/api/auth/login`**
Allows a user to log in and receive a JWT token.

- **Required data**:
```json
{
"username": "test",
"password": "password"
}
```
- **Expected response**:
```json
{
"access_token": "token_jwt_here",
"token_type": "bearer"
}
```

#### **POST `/api/auth/register`**
Allows a user to register with a new username and password.

- **Required data**:
```json
{
"username": "new_user",
"password": "new_password"
}
```
- **Expected response**:
```json
{
"access_token": "jwt_token_here",
"token_type": "bearer"
}
```

---

### 📌 **Notes API** (`/api/notes`)
#### **GET `/api/notes`**
Gets all the authenticated user's notes.

- **Expected response**:
```json
[
{
"id": 1,
"title": "Note 1",
"content": "Note 1 content",
"timestamp": "2025-01-20T12:00:00Z"
},
{
"id": 2,
"title": "Note 2",
"content": "Note 2 content",
"timestamp": "2025-01-20T13:00:00Z"
}
]
```

#### **POST `/api/notes`**
Create a new note for the authenticated user.

- **Required data**:
```json
{
"title": "Note title",
"content": "Note content"
}
```

#### **PUT `/api/notes/{id}`**
Updates an existing note.

- **Required data**:
```json
{
"title": "New title",
"content": "New content",
"updated_at": "2025-01-20T14:00:00Z"
}
```

#### **DELETE `/api/notes/{id}`**
Deletes a note by its `id`.

---

## 🛠 Project Scripts

- **Start the frontend**: `npm start`
- **Build for production**: `npm run build`
