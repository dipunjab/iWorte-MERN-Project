import NoteState from "./NotesContext/NoteState.jsx"
import TasksState from "./TasksContext/TasksState.jsx"


import React from 'react'

function Provider({ children }) {
    return (
        <TasksState>
            <NoteState>
                {children}
            </NoteState>
        </TasksState>
    )
}

export default Provider
