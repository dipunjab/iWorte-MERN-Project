import React from 'react'
import spinner from "../assets/spinner.gif"

function Spinner() {
  return (
    <div style={{
        width: "100vw",
        position: "fixed",
        top:"0",
        height: "100vw",
        backgroundColor: "#dad7cd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
      <img src={spinner} alt="" style={{width: "100px"}}/>
    </div>
  )
}

export default Spinner
