import { useState } from "react";
import NoteContext from "./NoteContext";

import React from 'react'

function NoteState(props) {
    const notes = [
        {
            id: 1, title: 'Note 1',
            content: 'This is note 1'
          },
        {
            id: 2, title: 'Note 2',
            content: 'This is note 2'
        }
    ]

  return (
    <NoteContext.Provider value={{notes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState


