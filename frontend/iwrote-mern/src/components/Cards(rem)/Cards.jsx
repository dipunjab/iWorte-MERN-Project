import React, { useContext } from 'react';
import "./Cards.css";
import editpng from "../../assets/edit.png";
import deletepng from "../../assets/delete.png";
import { useNavigate } from 'react-router-dom';
import NoteContext from '../../ContextApi/NotesContext/NoteContext';

function Cards(props) {

  const context = useContext(NoteContext)
  const {notes} = context

  const navigate = useNavigate()
  const handleCardClick = (noteId) => {
   navigate(`/viewnote/${noteId}`);
  };

  return (
    <div>
      {/* Notes displaying section on dashboard */}
      <div className="notes-box mt-4">
        <div className="d-flex justify-content-between align-item-center">
          <h1 className='fs-2 notes-h1'>{notes.title}</h1>
          <button className={`btn btn-primary view-btn d-${props.display}`}>View more</button>
        </div>
        <div className='notesCard d-flex flex-wrap gap-6'>
          {notes && notes.length > 0 ? (
            notes.map((note) => (
              <div key={note.id} className="card m-2 desk-card" onClick={() => handleCardClick(note.id)}>
                <div className="card-body">
                  <div className='d-flex justify-content-between align-item-center'>
                    <h5 className="card-title">{note.title}</h5>
                    <div>
                      <img src={editpng} alt='' className='editbtn' onClick={props.handleEdit} />
                      <img src={deletepng} alt='' className='editbtn' onClick={props.handleDelete} />
                    </div>
                  </div>
                  <p className="card-text">{note.content}</p>
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
