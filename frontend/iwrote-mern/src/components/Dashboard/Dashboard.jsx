import React from 'react'
import "./Dashboard.css"
import Cards from '../Cards(rem)/Cards'


function Dashboard() {
  return (
    <>
      <div className='dashboard-content'>
        <div className='dashboardHeading'>
          <h1>Dashboard</h1>
        </div>
        <Cards title="Notes"/>
        <Cards title="Tasks"/>
        <Cards title="StickyWall"/>
      </div>
    </>
  )
}

export default Dashboard
