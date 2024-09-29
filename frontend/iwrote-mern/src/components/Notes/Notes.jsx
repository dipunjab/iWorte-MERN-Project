import React from 'react'
import Cards from "../Cards(rem)/Cards"
import AddNote from './AddNote'
import addnotepng from "../../assets/addnote.png"
import "./Notes.css"
import { useNavigate } from 'react-router-dom'


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
        <div>
          <Cards display="none"/>
        </div>
      </div>
    </>
  )
}

export default Notes
