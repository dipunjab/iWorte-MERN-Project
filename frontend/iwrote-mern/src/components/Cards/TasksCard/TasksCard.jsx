import React, { useContext } from 'react'
import "./Taskscard.css"
import deletepng from "../../../assets/delete.png"
import TasksContext from '../../../ContextApi/TasksContext/TasksContext'
import { useNavigate } from 'react-router-dom'

function TasksCard({ tasks }) {
  const context = useContext(TasksContext)
  const { deleteTasks, checkTasks } = context

  const navigate = useNavigate()
  const handleCardClick = (taskId) => {
    navigate(`/viewTask/${taskId}`);
  };

  const handleCheck = async () => {
    checkTasks(tasks._id, !tasks.check);
  }

  return (
    <div className='cardTaskSmallWidth col-sm-6 col-md-4 col-lg-3'>
      <div className={`card ${tasks.check ? 'completed' : ''} h-100`}>
        <div className="p-2 d-flex justify-content-between align-items-center  taskcardhead">
          <div>
            <h2 className="fs-5">{tasks.title}</h2>
            <p style={{fontSize: "8px", margin: 0}}>{tasks.check ? "Completed" : ""}</p>
          </div>
          <div className="d-flex align-items-center">
            <input type="checkbox" className="checkbox mx-2" checked={tasks.check} onChange={() => handleCheck()} />
            <img src={deletepng} onClick={() => (deleteTasks(tasks._id))} alt="delete" className="deletepng" />
          </div>
        </div>
        <div className="card-body" style={{ cursor: "pointer" }}>
          <p onClick={() => handleCardClick(tasks._id)}>{tasks.content.length > 50 ? (
            <>
              {tasks.content.slice(0, 50)}
              <span style={{ color: "blue" }}>Read more...</span>
            </>
          )
            : tasks.content}</p>
        </div>
      </div>
    </div>

  )
}

export default TasksCard
