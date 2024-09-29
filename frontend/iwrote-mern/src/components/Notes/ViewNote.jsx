import React from 'react'
import { useParams } from 'react-router-dom';

function ViewNote(props) {
    const { noteId } = useParams();
    const note = props.notes.find(n => n.id === parseInt(noteId));
  
    return (
      <div className="container mt-5">
        {note ? (
          <>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </>
        ) : (
          <p>Note not found.</p>
        )}
      </div>
    );
}

export default ViewNote
