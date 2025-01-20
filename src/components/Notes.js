import React, { useEffect, useState } from "react";
import { getNotes, createNote, updateNote, deleteNote } from "../api";
import "./Notes.css"; // Importamos los estilos

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [editingNote, setEditingNote] = useState(null);

    // 📌 Cargar las notas al inicio
    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const data = await getNotes();
        setNotes(data);
    };

    // 📌 Manejar creación o edición de notas
    const handleSave = async (e) => {
        e.preventDefault();
        if (editingNote) {
            await updateNote(editingNote.id, title, content, editingNote.updated_at);
        } else {
            await createNote(title, content);
        }
        setTitle("");
        setContent("");
        setEditingNote(null);
        fetchNotes(); // Recargar notas
    };

    // 📌 Eliminar una nota
    const handleDelete = async (id) => {
        if (window.confirm("¿Seguro que quieres eliminar esta nota?")) {
            await deleteNote(id);
            fetchNotes();
        }
    };

    // 📌 Cargar una nota para edición
    const handleEdit = (note) => {
        setEditingNote(note);
        setTitle(note.title);
        setContent(note.content);
    };

    return (
        <div className="notes-container">
            <h2>Notas</h2>

            {/* 📌 Formulario de creación/edición */}
            <form onSubmit={handleSave} className="note-form">
                <input 
                    type="text" 
                    placeholder="Título" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
                <textarea 
                    placeholder="Contenido" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required 
                />
                <button type="submit">
                    {editingNote ? "Actualizar Nota" : "Crear Nota"}
                </button>
            </form>

            {/* 📌 Lista de notas */}
            <div className="note-list">
                {notes.map((note) => (
                    <div key={note.id} className="note-item">
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                        <button onClick={() => handleEdit(note)}>✏️ Editar</button>
                        <button onClick={() => handleDelete(note.id)}>🗑️ Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;
