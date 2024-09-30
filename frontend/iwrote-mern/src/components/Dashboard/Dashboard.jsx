import React, { useContext } from 'react'
import "./Dashboard.css"
import NoteContext from '../../ContextApi/NotesContext/NoteContext'
import NotesCard from "../Cards/NotesCard/NotesCard"
import TasksCard from "../Cards/TasksCard/TasksCard"
import StickyNotes from "../Cards/StickyNotesCard/StickyNotes"

function Dashboard() {
  const context = useContext(NoteContext)
  const { notes } = context

  const sliceNotes = notes.slice(0,3)

  return (
    <>
      <div className='dashboard-content'>
        <div className='dashboardHeading'>
          <h1 className='dashboardHeadingTitle' >Dashboard</h1>
        </div>
          <div className="notesCardContainer">
            <div className='d-flex justify-content-between'>
              <h1 className='whoseCard'>Notes</h1>
              <button className={`viewbtn btn btn-primary d-${notes.length > 3?"block": "none"}`}>ViewMore</button>
            </div>
            <div className="noteCardsDisplay">
              <NotesCard notes={sliceNotes}/>
            </div>
          </div>
          <div className="tasksCardContainer">
            <div className='d-flex justify-content-between'>
              <h1 className='whoseCard'>Tasks</h1>
              <button className={`viewbtn btn btn-primary d-${notes.length > 3?"block": "none"}`}>ViewMore</button>
            </div>
            <div className="tasksCardsDisplay">
              <TasksCard/>
            </div>
          </div>
          <div className="stickynotesCardContainer">
          <div className='d-flex justify-content-between'>
              <h1 className='whoseCard'>StickyWall</h1>
              <button className={`viewbtn btn btn-primary d-${notes.length > 3?"block": "none"}`}>ViewMore</button>
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
