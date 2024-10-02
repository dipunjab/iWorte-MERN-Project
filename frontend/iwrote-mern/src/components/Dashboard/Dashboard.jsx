import React, { useContext, useEffect } from 'react'
import "./Dashboard.css"
import NoteContext from '../../ContextApi/NotesContext/NoteContext'
import TasksContext from "../../ContextApi/TasksContext/TasksContext"
import NotesCard from "../Cards/NotesCard/NotesCard"
import TasksCard from "../Cards/TasksCard/TasksCard"
import StickyNotes from "../Cards/StickyNotesCard/StickyNotes"
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const noteContext = useContext(NoteContext)
  const {notes, getAllNotes } = noteContext

  const taskContext = useContext(TasksContext)
  const {tasks, getAllTasks} = taskContext

  const navigate = useNavigate()

  useEffect(()=>{
    getAllNotes()
  },[])
  useEffect(()=>{
    getAllTasks()
},[])

  const noteReverse = notes.slice().reverse()
  const sliceNotes = noteReverse.slice(0,3)
  
  const taskReverse = tasks.slice().reverse()
  const sliceTaskss = taskReverse.slice(0,3)

  const handleNoteViewMore = () => {
    navigate("/notes")
  }
  const handleTasksViewMore = () => {
    navigate("/tasks")
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
              <h1 className='whoseCard'>Tasks <span>({tasks.length})</span></h1>
              <button className={`viewbtn btn btn-primary d-${tasks.length >= 3?"block": "none"}`}>ViewMore</button>
            </div>
            <div className="tasksCardsDisplay">
              { sliceTaskss.length > 0 ? sliceTaskss.map((task)=>(
                <TasksCard key={task._id} tasks={task}/>
              )): <p>No Tasks available</p>}
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
