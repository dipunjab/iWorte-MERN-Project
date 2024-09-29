import React from 'react'
import "./Dashboard.css"

function Dashboard() {
  return (
    <>
      <div className='dashboard-content'>
        <div className='dashboardHeading'>
          <h1>Dashboard</h1>
        </div>

        {/* Notes displaying section on dashboard */}
        <div className="notes-box mt-4">
          <div className="d-flex justify-content-between align-item-center">
            <h1 className='fs-2 notes-h1'>Notes</h1>
            <button className='btn btn-primary view-btn'>View more</button>
          </div>
          <div className='notesCard d-flex flex-wrap gap-6'>
            <div class="card m-2 desk-card" >
              <div class="card-body">
                <div className='d-flex justify-content-between align-item-center'>
                  <h5 class="card-title">Card title</h5>
                  <div>
                    <a href="#" class="card-link">Edit</a>
                    <a href="#" class="card-link">Delete</a>
                  </div>
                </div>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card m-2 desk-card" >
              <div class="card-body">
                <div className='d-flex justify-content-between align-item-center'>
                  <h5 class="card-title">Card title</h5>
                  <div>
                    <a href="#" class="card-link">Edit</a>
                    <a href="#" class="card-link">Delete</a>
                  </div>
                </div>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card m-2 desk-card" >
            <div class="card-body">
              <div className='d-flex justify-content-between align-item-center'>
                <h5 class="card-title">Card title</h5>
                <div>
                  <a href="#" class="card-link">Edit</a>
                  <a href="#" class="card-link">Delete</a>
                </div>
              </div>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          </div>
        </div>

        {/* Tasks displaying section on dashboard */}
        <div className="task-box mt-4">
          <div className="d-flex justify-content-between align-item-center">
            <h1 className='fs-2 notes-h1'>Tasks</h1>
            <button className='btn btn-primary view-btn'>View more</button>
          </div>
          <div className='notesCard d-flex flex-wrap gap-6'>
            <div class="card m-2 desk-card" >
              <div class="card-body">
                <div className='d-flex justify-content-between align-item-center'>
                  <h5 class="card-title">Card title</h5>
                  <div>
                    <a href="#" class="card-link">Edit</a>
                    <a href="#" class="card-link">Delete</a>
                  </div>
                </div>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card m-2 desk-card" >
              <div class="card-body">
                <div className='d-flex justify-content-between align-item-center'>
                  <h5 class="card-title">Card title</h5>
                  <div>
                    <a href="#" class="card-link">Edit</a>
                    <a href="#" class="card-link">Delete</a>
                  </div>
                </div>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card m-2 desk-card" >
            <div class="card-body">
              <div className='d-flex justify-content-between align-item-center'>
                <h5 class="card-title">Card title</h5>
                <div>
                  <a href="#" class="card-link">Edit</a>
                  <a href="#" class="card-link">Delete</a>
                </div>
              </div>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          </div>
        </div>
        
        {/* Tasks displaying section on dashboard */}
        <div className="stickywall-box mt-4">
          <div className="d-flex justify-content-between align-item-center">
            <h1 className='fs-2 notes-h1'>StickyWall</h1>
            <button className='btn btn-primary view-btn'>View more</button>
          </div>
          <div className='notesCard d-flex flex-wrap gap-6'>
            <div class="card m-2 desk-card" >
              <div class="card-body">
                <div className='d-flex justify-content-between align-item-center'>
                  <h5 class="card-title">Card title</h5>
                  <div>
                    <a href="#" class="card-link">Edit</a>
                    <a href="#" class="card-link">Delete</a>
                  </div>
                </div>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card m-2 desk-card" >
              <div class="card-body">
                <div className='d-flex justify-content-between align-item-center'>
                  <h5 class="card-title">Card title</h5>
                  <div>
                    <a href="#" class="card-link">Edit</a>
                    <a href="#" class="card-link">Delete</a>
                  </div>
                </div>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card m-2 desk-card" >
            <div class="card-body">
              <div className='d-flex justify-content-between align-item-center'>
                <h5 class="card-title">Card title</h5>
                <div>
                  <a href="#" class="card-link">Edit</a>
                  <a href="#" class="card-link">Delete</a>
                </div>
              </div>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard
