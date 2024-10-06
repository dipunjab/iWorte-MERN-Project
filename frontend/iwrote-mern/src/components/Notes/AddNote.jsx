import React, { useContext, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import NoteContext from '../../ContextApi/NotesContext/NoteContext'


function AddNote() {
  const context = useContext(NoteContext)
  const {addNotes} = context

  const [note, setNote] = useState({title:"", content:""})

  const navigate = useNavigate()
  
  const handleSave = (e)=>{
    e.preventDefault()
    addNotes(note.title, note.content)
    alert("Note Added")
    navigate("/notes")
  }

  const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <>
    <div className='addNoteContainer'>
      <div>
        <h1>Add-Note</h1>
      </div>
      <div className="titleInput">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="title" className="form-control" name='title' onChange={onChange} maxLength={30}/>
      </div>
      <div className="contentInput">
        <label htmlFor="content" className="form-label">Content</label>
        <textarea className="contentarea form-control" rows="13" name='content' onChange={onChange} maxLength={2000}></textarea>
      </div>
      <div>
        <i>{note.content.length}/2000</i>
      </div>
      <div className='addNotebtns'>
          <button onClick={handleSave} className='btn btn-dark'>Save</button>
          <Link className='btn btn-danger' to="/notes">Cancel</Link>
      </div>
      </div>
    </>
  )
}

export default AddNote
