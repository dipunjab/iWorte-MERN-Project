import React from 'react'
import addnotepng from "../../assets/addnote.png"
import "./Notes.css"
import { useNavigate } from 'react-router-dom'
import NotesCard from "../Cards/NotesCard/NotesCard" 

function Notes() {
  const navigate = useNavigate()

  const handleAddnote = ()=>{
    navigate("/addnote")
  }

  return (
    <>
      <div>
        <div className='dashboardHeading'>
          <h1>Notes</h1>
        </div>
        <div>
          <button onClick={()=>(handleAddnote())} className='addNotebtn'><img src={addnotepng} alt="addnote" /><span>Add Note</span></button>
        </div>  
        <div className='NotesContainer'>
          <NotesCard/>
        </div>
      </div>
    </>
  )
}

export default Notes
