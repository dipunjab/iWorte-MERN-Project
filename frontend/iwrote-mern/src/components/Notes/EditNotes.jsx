import React, { useContext , useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NoteContext from '../../ContextApi/NotesContext/NoteContext'

function EditNotes() {
    const context = useContext(NoteContext)
    const {notes, editNotes} = context
    const {noteId} = useParams()
    const [note, setNote] = useState({title:"", content:""})

    useEffect(() => {
          const foundNote = notes.find((n) => n._id === noteId);
          if (foundNote) {
              setNote(foundNote); 
          }
  }, [noteId, notes]);

  
    const navigate = useNavigate()
    
    const handleSave = (e)=>{
      e.preventDefault()
      editNotes(noteId, note.title, note.content)
      alert("Note Added")
      navigate("/")
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
        <input type="title" className="form-control" name='title' onChange={onChange} value={note.title}/>
      </div>
      <div className="contentInput">
        <label htmlFor="content" className="form-label">Content</label>
        <textarea className="contentarea form-control" rows="13" name='content' onChange={onChange} value={note.content}></textarea>
      </div>
      <div className='addNotebtns'>
          <button onClick={handleSave}>Save</button>
          <button>Cancel</button>
      </div>
      </div>
    </>
  )
}

export default EditNotes
