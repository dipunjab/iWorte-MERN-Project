import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TasksContext from '../../ContextApi/TasksContext/TasksContext';

function ViewTask() {
    const context = useContext(TasksContext)
    const {tasks} = context
    
    const { taskId } = useParams();
  
    const [task, setTask] = useState(null);
  
  
    useEffect(() => {
      const foundNote = tasks.find((task) => task._id === taskId);
      setTask(foundNote);
    }, [taskId, tasks]);

return (
        <div className="container mt-5">
          {task ? (
            <>
                <div className='viewNoteContainer'>
                  <div className='noteTitle'>
                    <h1><i style={{color: "gray"}}>Title:</i> {task.title}</h1>
                  </div>
                  <hr /> 
                  <div className='noteContent'>
                      <i style={{color: "gray"}}><h3>Content:-</h3></i>  
                      <p>{task.content}</p>
                  </div>
                </div>
            </>
          ) : (
            <p>Note not found.</p>
          )}
        </div>
      );
}

export default ViewTask
