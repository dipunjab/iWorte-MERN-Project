import { useState } from "react";
import NoteContext from "./NoteContext";

import React from 'react'

function NoteState(props) {
    const notesInitial = [
        {
            id: 1, title: 'Note 1',
            content: 'This is note 1'
          },
        {
            id: 2, title: 'Note 2',
            content: 'This is note 2'
        },
        {
            id: 3, title: 'Note 3',
            content: 'This is note 2'
        },
        {
            id: 4, title: 'Note 4',
            content: 'This is note 2'
        }
    ]

    const [notes, setnotes] = useState(notesInitial)

    const addNotes = (title, content)=>{
      const note = {
        id: 3,
        title,
        content,
      }
      setnotes(notes.concat(note))
    };

    const deleteNotes = (id)=>{
      const newNotes = notes.filter((note)=>{return note.id!==id})
        setnotes(newNotes)
    }

    const editNotes = (id, title, content)=>{

    }


  return (
    <NoteContext.Provider value={{notes, addNotes, deleteNotes, editNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState


