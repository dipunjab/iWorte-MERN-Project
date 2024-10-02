import React, { useContext } from 'react'
import "./Sticky.css"
import deletePng from "../../../assets/delete.png"
import StickyContext from '../../../ContextApi/StickyNotesContext/StickyContext'


function StickyNotes({notes}) {
  let bgColor = notes.color || "black"

  const context = useContext(StickyContext)
  const {deleteStickyNote} = context

  return (
    <div>
      <div className='stickyWallContainer'>
        <div className='stickyNoteCard' style={{ background: `${bgColor}`, border: `2px solid ${bgColor}` }}>
          <div className="deletePNG">
            <img src={deletePng} alt="" onClick={()=>(deleteStickyNote(notes._id))}/>
          </div>
          <div className='stickyContent'>
              <p>{notes.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyNotes
