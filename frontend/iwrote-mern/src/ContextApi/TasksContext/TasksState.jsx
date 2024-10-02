import { useState } from "react";
import TasksContext from "./TasksContext";

import React from 'react'

function TasksState(props) {
  const tasksInitial = [];
  const [tasks, settasks] = useState(tasksInitial);
  const host = "http://localhost:8000/api";


  const getAllTasks = async () => {
    const url = `${host}/task/getalltask`
   const response = await fetch(url, {
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmN2Y0MzlmM2I2OTgwODRlMjZiZjg2In0sImlhdCI6MTcyNzg3NzQzOH0.hr3aylcD54sHjxek8Ea35Ywj_2fkDeZjdql_llAlPpM'
      }
    })
    const json = await response.json()
    const tasksData = json.data
    
    settasks(tasksData)
  }

  const addTasks = async (title, content, check) => {
    const url = `${host}/task/addtask`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmN2Y0MzlmM2I2OTgwODRlMjZiZjg2In0sImlhdCI6MTcyNzg3NzQzOH0.hr3aylcD54sHjxek8Ea35Ywj_2fkDeZjdql_llAlPpM'
      },
      body: JSON.stringify({title, content, check: false})
    })
    if (!response.ok) {
      console.error("Error adding tasks:", response);
      return;
    }
    const task = await response.json()

    settasks(task)
  };

  const deleteTasks = async (id) => {
    const url = `${host}/task/deletetask/${id}`
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

    let newTask = tasks.filter((task) => (task._id !== id))
    settasks(newTask)
  }

  const checkTasks = async(id, check) => {
    const url = `${host}/task/updatetask/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmN2Y0MzlmM2I2OTgwODRlMjZiZjg2In0sImlhdCI6MTcyNzg3NzQzOH0.hr3aylcD54sHjxek8Ea35Ywj_2fkDeZjdql_llAlPpM'
      },
      body: JSON.stringify({check})
    })
    const updatedTask = await response.json()
    const updatedTasks = tasks.map(task => 
      task._id === id ? { ...task, check: updatedTask.data.check } : task
    );
    
    settasks(updatedTasks);
  }


  return (
    <TasksContext.Provider value={{ tasks, addTasks, deleteTasks, getAllTasks, checkTasks}}>
      {props.children}
    </TasksContext.Provider>
  )
}

export default TasksState


