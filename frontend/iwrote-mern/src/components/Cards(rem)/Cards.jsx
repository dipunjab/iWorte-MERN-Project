import React from 'react'
import "./Cards.css"
import editpng from "../../assets/edit.png"
import deletepng from "../../assets/delete.png"

function Cards(props) {
  return (
    <div>
       {/* Notes displaying section on dashboard */}
       <div className="notes-box mt-4">
          <div className="d-flex justify-content-between align-item-center">
            <h1 className='fs-2 notes-h1'>{props.title}</h1>
            <button className='btn btn-primary view-btn'>View more</button>
          </div>
          <div className='notesCard d-flex flex-wrap gap-6'>
            <div className="card m-2 desk-card" >
              <div className="card-body">
                <div className='d-flex justify-content-between align-item-center'>
                  <h5 className="card-title">Card title</h5>
                  <div>
                    <img src={editpng} alt='' className='editbtn'/>
                    <img src={deletepng} alt='' className='editbtn'/>
                  </div>
                </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card m-2 desk-card" >
              <div className="card-body">
                <div className='d-flex justify-content-between align-item-center'>
                  <h5 className="card-title">Card title</h5>
                  <div>
                  <img src={editpng} alt='' className='editbtn'/>
                  <img src={deletepng} alt='' className='editbtn'/>
                  </div>
                </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card m-2 desk-card" >
            <div className="card-body">
              <div className='d-flex justify-content-between align-item-center'>
                <h5 className="card-title">Card title</h5>
                <div>
                <img src={editpng} alt='' className='editbtn'/>
                <img src={deletepng} alt='' className='editbtn'/>
                </div>
              </div>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Cards
