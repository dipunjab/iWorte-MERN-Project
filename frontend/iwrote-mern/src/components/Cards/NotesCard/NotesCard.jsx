import React, { useContext } from 'react'
import "./NotesCard.css"
import editpng from "../../../assets/edit.png"
import deletepng from "../../../assets/delete.png"
import { useNavigate } from 'react-router-dom'
import NoteContext from "../../../ContextApi/NotesContext/NoteContext"

function NotesCard({ notes }) {

  const context = useContext(NoteContext)
  const { deleteNotes } = context
  const navigate = useNavigate()

  const handleEditNote = (noteID) => {
    navigate(`/editnote/${noteID}`)
  }

  const handleCardClick = (noteId) => {
    navigate(`/viewnote/${noteId}`);
  };

  return (
    <div className='cardSmallWidth col-sm-6 col-md-4 col-lg-3'>
      <div key={notes._id} className="card" >
        <div className="card-body">
          <div className='d-flex justify-content-between'>
            <h5 className="card-title">{notes.title}</h5>
            <div>
              <img src={editpng} alt="" className='imgIcon' onClick={() => (handleEditNote(notes._id))} />
              <img src={deletepng} alt="" className='imgIcon' onClick={() => (deleteNotes(notes._id))} />
            </div>
          </div>
          <h6 className="card-subtitle mb-2 text-body-secondary">{notes.tag}</h6>
          <p onClick={() => handleCardClick(notes._id)} className="card-text custom-pointer">{notes.content.length > 50 ?
            (<>
              {notes.content.slice(0, 50)}
              <span style={{ color: "red" }}> Read more...</span>
            </>
            ) : notes.content}</p>
        </div>
      </div>
    </div>
  )
}

export default NotesCard
