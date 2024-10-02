import React, { useContext, useRef, useEffect,useState } from 'react'
import TasksCard from '../Cards/TasksCard/TasksCard'
import TasksContext from "../../ContextApi/TasksContext/TasksContext"
import addnotepng from "../../assets/addnote.png"


function Tasks() {
    const context = useContext(TasksContext)
    const {tasks,addTasks, getAllTasks} = context
    const [task, setTask] = useState({ title: '', content: '' })

        useEffect(()=>{
            getAllTasks()
        },[])


    const modalRef = useRef(null);
    
    const handleSave = async(e)=>{
        e.preventDefault()
        await addTasks(task.title, task.content)
        alert("Task Added")
        setTask({ title: '', content: '' })
        await getAllTasks();  

        // Using Bootstrap's modal method to hide it
        const modalElement = modalRef.current;
        if (modalElement) {
            const bootstrapModal = window.bootstrap.Modal.getInstance(modalElement); // Get the Bootstrap modal instance
            if (bootstrapModal) {
                bootstrapModal.hide(); 
            }
        }
    }

    
    const onChange = (e)=>{
        setTask({...task, [e.target.name]: e.target.value})
      }

    return (
        <div>
            <div className='addTask'>
                <div ref={modalRef}  className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <label htmlFor="title" className='m-2'><strong>Title:</strong></label>
                                <input className="modal-title rounded" name='title' onChange={onChange}/>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body d-flex ">
                            <label htmlFor="content" className='m-2'><strong>Content:</strong></label>
                            <textarea className="modal-title rounded-4 " name='content' onChange={onChange} cols={120} rows={5}></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='dashboardHeading'>
                    <h1>Tasks</h1>
                </div>
                <div>
                    <button 
                        type="button" 
                        className="addNotebtn btn btn-primary" 
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal"
                    >
                        <img src={addnotepng} alt="addnote" />
                        <i style={{color: "black"}}>Add Task</i>
                    </button>
                </div>
                <div className='NotesContainer m-2'>
                    {tasks.length > 0 ? tasks.slice().reverse().map((task) => (
                        <TasksCard key={task._id} tasks={task} />
                    )) : <p>No Tasks available</p>}
                </div>
            </div>
        </div>
    )
}

export default Tasks
