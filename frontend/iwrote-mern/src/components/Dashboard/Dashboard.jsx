import React, { useContext } from 'react'
import "./Dashboard.css"
import Cards from '../Cards(rem)/Cards'
import NoteContext from '../../ContextApi/NotesContext/NoteContext'


function Dashboard() {
  const context = useContext(NoteContext)
  const{ notes} = context

  const recent = notes.slice(0,3)

  return (
    <>
      <div className='dashboard-content'>
        <div className='dashboardHeading'>
          <h1>Dashboard</h1>
        </div>
        <Cards title="Notes-Recent" notes={recent}/>
        <Cards title="Tasks-Recent" notes={recent}/>
        <Cards title="StickyWall-Recent" notes={recent}/>
      </div>
    </>
  )
}

export default Dashboard
