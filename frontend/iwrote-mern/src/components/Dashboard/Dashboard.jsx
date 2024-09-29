import React, { useState } from 'react'
import "./Dashboard.css"
import Cards from '../Cards(rem)/Cards'
import Welsec from './Welsec'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function Dashboard() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className='dashboard-content'>
        <div className='dashboardHeading'>
          <h1>Dashboard</h1>
        </div>
        <Cards title="Notes" />
        <Cards title="Tasks" />
        <Cards title="StickyWall" />
        <Welsec />
        <div className='calenderContainer'>
        <Calendar className="calender" onChange={onChange} value={value}/>
        </div>
      </div>
    </>
  )
}

export default Dashboard
