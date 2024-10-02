import React, { useState } from 'react'
import StickyContext from './StickyContext'

function StickyState(props) {
  const stickyNotesInitial = []

  const [stickyNotes, setStickyNotes] = useState(stickyNotesInitial)
  const host = 'http://localhost:8000/api/stickynote'

  const getAllStickyNotes = async () => {
    const url = `${host}/getallstcikynote`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmN2Y0MzlmM2I2OTgwODRlMjZiZjg2In0sImlhdCI6MTcyNzg3NzQzOH0.hr3aylcD54sHjxek8Ea35Ywj_2fkDeZjdql_llAlPpM'
      }
    })
    const json = await response.json()
    const notesData = json.data

    setStickyNotes(notesData)
  }

  const addStickyNote = async (content, color) => {
    const url = `${host}/addstickynote`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmN2Y0MzlmM2I2OTgwODRlMjZiZjg2In0sImlhdCI6MTcyNzg3NzQzOH0.hr3aylcD54sHjxek8Ea35Ywj_2fkDeZjdql_llAlPpM'
      },
      body: JSON.stringify({ content, color })
    })
    const note = await response.json()
    setStickyNotes(stickyNotes.concat(note))
  }

  const deleteStickyNote = async (id) => {
    const url = `${host}/deletestickynote/${id}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmN2Y0MzlmM2I2OTgwODRlMjZiZjg2In0sImlhdCI6MTcyNzg3NzQzOH0.hr3aylcD54sHjxek8Ea35Ywj_2fkDeZjdql_llAlPpM'
      }
    })
    await response.json()
    const upnote = stickyNotes.filter(note=> note._id !== id)
    setStickyNotes(upnote)
  }


  return (
    <StickyContext.Provider value={{ stickyNotes, deleteStickyNote, getAllStickyNotes, addStickyNote }}>
      {props.children}
    </StickyContext.Provider>
  )
}

export default StickyState
