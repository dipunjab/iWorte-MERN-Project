import NoteState from "./NotesContext/NoteState.jsx"
import StickyState from "./StickyNotesContext/StickyState.jsx"
import TasksState from "./TasksContext/TasksState.jsx"


import React from 'react'

function Provider({ children }) {
    return (
        <StickyState>
            <TasksState>
                <NoteState>
                    {children}
                </NoteState>
            </TasksState>
        </StickyState>
    )
}

export default Provider
