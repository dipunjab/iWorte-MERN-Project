import React from 'react'
import spinner from "../assets/spinner.gif"

function Spinner() {
  return (
    <div className='position-fixed top-50 start-50'>
      <img src={spinner} alt="" style={{width: "100px"}}/>
    </div>
  )
}

export default Spinner
