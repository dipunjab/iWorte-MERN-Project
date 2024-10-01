import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NoteContext from '../../ContextApi/NotesContext/NoteContext';

function ViewNote() {
  const context = useContext(NoteContext)
  const {notes} = context
  
  const { noteId } = useParams();

  const [note, setNote] = useState(null);


  useEffect(() => {
    const foundNote = notes.find((note) => note._id === noteId);
    setNote(foundNote);
  }, [noteId, notes]);

  return (
    <div className="container mt-5">
      {note ? (
        <>
            <div className='viewNoteContainer'>
              <div className='noteTitle'>
                <h1><i style={{color: "gray"}}>Title:</i> {note.title}</h1>
                <p><strong>Tag:</strong> {note.tag}</p>
              </div>
              <hr /> 
              <div className='noteContent'>
                  <i style={{color: "gray"}}><h3>Content:-</h3></i>  
                  <p>{note.content}</p>
              </div>
            </div>
        </>
      ) : (
        <p>Note not found.</p>
      )}
    </div>
  );
}

export default ViewNote
