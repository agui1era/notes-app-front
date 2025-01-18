import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:8000/api/notes', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotes(response.data);
    };

    fetchNotes();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note.id} className="p-4 border-b">{note.title}: {note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPage;