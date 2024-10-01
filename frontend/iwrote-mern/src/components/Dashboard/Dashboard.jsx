import React, { useContext, useEffect } from 'react'
import "./Dashboard.css"
import NoteContext from '../../ContextApi/NotesContext/NoteContext'
import NotesCard from "../Cards/NotesCard/NotesCard"
import TasksCard from "../Cards/TasksCard/TasksCard"
import StickyNotes from "../Cards/StickyNotesCard/StickyNotes"
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const context = useContext(NoteContext)
  const {notes, getAllNotes } = context
  const navigate = useNavigate()

  useEffect(()=>{
    getAllNotes()
  },[])

  const reverse = notes.slice().reverse()
  const sliceNotes = reverse.slice(0,3)

  const handleNoteViewMore = () => {
    navigate("/notes")
  }

  return (
    <>
      <div className='dashboard-content'>
        <div className='dashboardHeading'>
          <h1 className='dashboardHeadingTitle' >Dashboard</h1>
        </div>
          <div className="notesCardContainer">
            <div className='d-flex justify-content-between'>
              <h1 className='whoseCard'>Notes <span>({notes.length})</span></h1>
              <button className={`viewbtn btn btn-primary d-${notes.length >= 3?"block": "none"}`} onClick={handleNoteViewMore}>ViewMore</button>
            </div>
            <div className="noteCardsDisplay">
              {sliceNotes.length > 0 ? sliceNotes.map((note)=>(
                <NotesCard  key={note._id} notes={note}/>
              )): <p>No Notes available</p>}
            </div>
          </div>
          <div className="tasksCardContainer">
            <div className='d-flex justify-content-between'>
              <h1 className='whoseCard'>Tasks</h1>
              <button className={`viewbtn btn btn-primary d-${notes.length >= 3?"block": "none"}`}>ViewMore</button>
            </div>
            <div className="tasksCardsDisplay">
              <TasksCard/>
            </div>
          </div>
          <div className="stickynotesCardContainer">
          <div className='d-flex justify-content-between'>
              <h1 className='whoseCard'>StickyWall</h1>
              <button className={`viewbtn btn btn-primary d-${notes.length >= 3?"block": "none"}`}>ViewMore</button>
            </div>
            <div className="stickynotesCardsDisplay">
                <StickyNotes/>
            </div>
          </div>
      </div>
    </>
  )
}

export default Dashboard
