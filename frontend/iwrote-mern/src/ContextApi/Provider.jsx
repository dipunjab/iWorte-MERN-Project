import AuthState from "./AuthContext/AuthState.jsx"
import NoteState from "./NotesContext/NoteState.jsx"
import StickyState from "./StickyNotesContext/StickyState.jsx"
import TasksState from "./TasksContext/TasksState.jsx"


import React from 'react'

function Provider({ children }) {

    return (
        <AuthState>
            <StickyState>
                <TasksState>
                    <NoteState>
                        {children}
                    </NoteState>
                </TasksState>
            </StickyState>
        </AuthState>
    )
}

export default Provider
