import React, { useContext } from 'react'
import "./NotesCard.css"
import editpng from "../../../assets/edit.png"
import deletepng from "../../../assets/delete.png"
import NoteContext from "../../../ContextApi/NotesContext/NoteContext"
import { useNavigate } from 'react-router-dom'

function NotesCard({notes: propNotes}) {
  const context = useContext(NoteContext)
  const {notes} = context

  const displayNotes = propNotes || notes

  const navigate = useNavigate()
  const handleCardClick = (noteId) => {
   navigate(`/viewnote/${noteId}`);
  };

  return (
    <div className='NotesCardContainer'>
      {displayNotes && displayNotes.length > 0 ?
      displayNotes.map((note)=>(
      <div key={note.id} className="card">
        <div className="card-body">
          <div className='d-flex justify-content-between'>
            <h5 className="card-title">{note.title}</h5>
            <div>
              <img src={editpng} alt="" className='imgIcon' />
              <img src={deletepng} alt="" className='imgIcon' />
            </div>
          </div>
          <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
          <p onClick={() => handleCardClick(note.id)} className="card-text custom-pointer">{note.content}</p>
        </div>
    </div> )): <p>No Notes Available</p>}
      </div>
  )
}

export default NotesCard
