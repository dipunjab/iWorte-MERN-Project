import React from 'react'
import Cards from "../Cards(rem)/Cards"

function Notes(props) {

  const handleEdit = ()=>{

  }
  const handleDelete = ()=>{}

  return (
    <>
      <div>
        <div className='dashboardHeading'>
          <h1>Notes</h1>
        </div>
        <Cards notes={props.notes} editbtn={handleEdit} deletebtn={handleDelete} display="none"/>
      </div>
    </>
  )
}

export default Notes
