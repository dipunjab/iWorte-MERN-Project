import React, { useContext, useEffect } from 'react'
import addnotepng from "../../assets/addnote.png"
import "./Notes.css"
import { useNavigate } from 'react-router-dom'
import NotesCard from "../Cards/NotesCard/NotesCard"
import NoteContext from '../../ContextApi/NotesContext/NoteContext'

function Notes() {
  const navigate = useNavigate()

  const handleAddnote = () => {
    navigate("/addnote")
  }

  const context = useContext(NoteContext)
  const { notes, getAllNotes } = context

  useEffect(() => {
    getAllNotes()
  }, [])


  return (
    <>
      <div>
        <div className='dashboardHeading'>
          <h1>Notes</h1>
        </div>
        <div>
          <button onClick={() => (handleAddnote())} className='addNotebtn'><img src={addnotepng} alt="addnote" /><span>Add Note</span></button>
        </div>
        <div className='NotesContainer'>
          {notes.length > 0 ? 
          notes.slice().reverse().map((note) => (
            <NotesCard key={note._id} notes={note} />
          )) : <p>No Notes available</p>}
        </div>
      </div>
    </>
  )
}

export default Notes
