import { useState } from "react";
import NoteContext from "./NoteContext";

import React from 'react'

function NoteState(props) {
  const notesInitial = [];
  const [notes, setnotes] = useState(notesInitial);
  const host = "http://localhost:8000/api";


  const getAllNotes = async () => {
    const url = `${host}/note/getallnote`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmN2Y0MzlmM2I2OTgwODRlMjZiZjg2In0sImlhdCI6MTcyNzg3NzQzOH0.hr3aylcD54sHjxek8Ea35Ywj_2fkDeZjdql_llAlPpM'
      }
    })
    if (!response.ok) {
      console.error("Error fetching notes:", response.statusText);
      return;
    }
    const json = await response.json()
    // console.log(json);
    const notesData = json.data
    setnotes(notesData)
  }

  const addNotes = async (title, content, tag) => {
    const url = `${host}/note/addnote`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmN2Y0MzlmM2I2OTgwODRlMjZiZjg2In0sImlhdCI6MTcyNzUzMjQ2NX0.0yCPFQ0B3-Ob8RV78vTZ1E9Dcxdx9psuWRddMAp8FGA'
      },
      body: JSON.stringify({ title, content, tag })
    })
    if (!response.ok) {
      console.error("Error fetching notes:", response.statusText);
      return;
    }
    const note = await response.json()
    // console.log(json);
    setnotes(note)
  };

  const deleteNotes = async (id) => {
    const url = `${host}/note/deletenote/${id}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmN2Y0MzlmM2I2OTgwODRlMjZiZjg2In0sImlhdCI6MTcyNzg3NzQzOH0.hr3aylcD54sHjxek8Ea35Ywj_2fkDeZjdql_llAlPpM'
      }
    })
    if (!response.ok) {
      console.error("Error Deleting notes:", response);
      return;
    }
    await response.json()

    let newNote = notes.filter((note) => (note._id !== id))
    setnotes(newNote)
  }

  const editNotes = async(id, title, content, tag) => {
    const url = `${host}/note/updatenote/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmN2Y0MzlmM2I2OTgwODRlMjZiZjg2In0sImlhdCI6MTcyNzg3NzQzOH0.hr3aylcD54sHjxek8Ea35Ywj_2fkDeZjdql_llAlPpM'
      },
      body: JSON.stringify({title,content,tag})
    })
    await response.json()

    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let i = 0; i < newNotes.length; i++) {
      let elem = newNotes[i]
      if (elem._id === id) {
        newNotes[i].title = title;
        newNotes[i].content = content;
        newNotes[i].tag = tag;
        break;
      }
    }
   setnotes(newNotes)
  }


  return (
    <NoteContext.Provider value={{ notes, getAllNotes, addNotes, deleteNotes, editNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState


