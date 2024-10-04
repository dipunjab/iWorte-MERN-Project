import React, { useContext, useRef, useEffect, useState } from 'react';
import TasksCard from '../Cards/TasksCard/TasksCard';
import TasksContext from "../../ContextApi/TasksContext/TasksContext";
import addnotepng from "../../assets/addnote.png";
import { useNavigate } from 'react-router-dom';

function Tasks() {
    const context = useContext(TasksContext);
    const { tasks, addTasks, getAllTasks } = context;
    const [task, setTask] = useState({ title: '', content: '' });
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const modalRef = useRef(null);

    useEffect(() => {
        // if (localStorage.getItem("auth")) {
        //     getAllTasks();
        // } else {
        //     navigate("/login");
        // }
        getAllTasks()
    }, []);

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await addTasks(task.title, task.content);
            alert("Task Added");
            setTask({ title: '', content: '' });
            await getAllTasks();
            setModalOpen(false);
        } catch (error) {
            console.error("Failed to add task:", error);
            alert("Error adding task. Please try again.");
        }
    };

    const onChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    return (
        <div>
            {/* Modal for Adding Task */}
            <div ref={modalRef} className={`modal fade ${isModalOpen ? 'show' : ''}`} style={{ display: isModalOpen ? 'block' : 'none' }} aria-labelledby="exampleModalLabel" aria-hidden={!isModalOpen}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="title" className='m-2'><strong>Title:</strong></label>
                            <input
                                className="modal-title rounded"
                                name='title'
                                onChange={onChange}
                                value={task.title}
                            />
                            <button type="button" className="btn-close" onClick={() => setModalOpen(false)} aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex">
                            <label htmlFor="content" className='m-2'><strong>Content:</strong></label>
                            <textarea
                                className="modal-title rounded-4"
                                name='content'
                                onChange={onChange}
                                value={task.content} // Bind the value
                                cols={120}
                                rows={5}
                            ></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setModalOpen(false)}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
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
                        onClick={() => setModalOpen(true)}
                    >
                        <img src={addnotepng} alt="addnote" />
                        <i style={{ color: "black" }}>Add Task</i>
                    </button>
                </div>
                <div className="container">
                    <div className='row gy-2 my-3'>
                        {tasks.length > 0 ? tasks.slice().reverse().map((task) => (
                            <TasksCard key={task._id} tasks={task} />
                        )) : <p>No Tasks available</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tasks;
