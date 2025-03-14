import { useState } from "react";
import TasksContext from "./TasksContext";

import React from 'react'

function TasksState(props) {
  const tasksInitial = [];
  const [tasks, settasks] = useState(tasksInitial);
  const host = "https://i-worte-mernbackend-api.vercel.app/api";


  const getAllTasks = async () => {
    const url = `${host}/task/getalltask`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth')
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
        'auth-token': localStorage.getItem('auth')
      },
      body: JSON.stringify({ title, content, check: false })
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
        'auth-token': localStorage.getItem('auth')
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

  const checkTasks = async (id, check) => {
    const url = `${host}/task/updatetask/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth')
      },
      body: JSON.stringify({ check })
    })
    const updatedTask = await response.json()
    const updatedTasks = tasks.map(task =>
      task._id === id ? { ...task, check: updatedTask.data.check } : task
    );

    settasks(updatedTasks);
  }


  return (
    <TasksContext.Provider value={{ tasks, addTasks, deleteTasks, getAllTasks, checkTasks }}>
      {props.children}
    </TasksContext.Provider>
  )
}

export default TasksState


