import React, { useContext } from 'react'
import "./Sticky.css"
import deletePng from "../../../assets/delete.png"
import StickyContext from '../../../ContextApi/StickyNotesContext/StickyContext'


function StickyNotes({notes}) {
  let bgColor = notes.color || "black"

  const context = useContext(StickyContext)
  const {deleteStickyNote} = context

  return (
    <div className='stickycardSmallWidth col-sm-6 col-md-4 col-lg-3 mb-5'>
        <div className='card' style={{ background: `${bgColor}`, border: `2px solid ${bgColor}` }}>
          <div className="deletePNG">
            <img src={deletePng} alt="" onClick={()=>(deleteStickyNote(notes._id))}/>
          </div>
          <div className='stickyContent'>
              <p>{notes.content}</p>
          </div>
        </div>
      </div>
  )
}

export default StickyNotes
