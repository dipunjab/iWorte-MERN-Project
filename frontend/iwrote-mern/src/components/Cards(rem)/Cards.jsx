import React, { useContext } from 'react';
import "./Cards.css";
import editpng from "../../assets/edit.png";
import deletepng from "../../assets/delete.png";
import { useNavigate } from 'react-router-dom';
import NoteContext from '../../ContextApi/NotesContext/NoteContext';

function Cards(props) {

  const context = useContext(NoteContext)
  const {notes, deleteNotes} = context

  const navigate = useNavigate()

  const handleCardClick = (noteId) => {
   navigate(`/viewnote/${noteId}`);
  };

  const handleDelete = (noteId)=>{
    deleteNotes(noteId)
  };
  const handleEdit = ()=>{}

  const availableNotes = props.notes ||notes

  return (
    <div>
      {/* Notes displaying section on dashboard */}
      <div className="notes-box mt-4">
        <div className="d-flex justify-content-between align-item-center">
          <h1 className='fs-2 notes-h1'>{props.title}</h1>
          <button className={`btn btn-primary view-btn d-${props.display}`}>View more</button>
        </div>
        <div className='notesCard d-flex flex-wrap gap-6'>
          {availableNotes && availableNotes.length > 0 ? (
            availableNotes.map((note) => (
              <div key={note.id} className="card m-2 desk-card" >
                <div className="card-body">
                  <div className='d-flex justify-content-between align-item-center'>
                    <h5 className="card-title">{note.title}</h5>
                    <div>
                      <img src={editpng} alt='' className='editbtn' onClick={handleEdit} />
                      <img src={deletepng} alt='' className='editbtn' onClick={()=>(handleDelete(note.id))} />
                    </div>
                  </div>
                  <p className="card-text" onClick={() => handleCardClick(note.id)}>{note.content}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No notes available</p> 
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
