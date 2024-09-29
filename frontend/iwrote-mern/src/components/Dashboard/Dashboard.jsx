import React, { useState } from 'react'
import "./Dashboard.css"
import Cards from '../Cards(rem)/Cards'


function Dashboard(props) {
  return (
    <>
      <div className='dashboard-content'>
        <div className='dashboardHeading'>
          <h1>Dashboard</h1>
        </div>
        <Cards title="Notes" notes={props.notes}/>
        <Cards title="Tasks" notes={props.notes}/>
        <Cards title="StickyWall" notes={props.notes}/>
      </div>
    </>
  )
}

export default Dashboard
