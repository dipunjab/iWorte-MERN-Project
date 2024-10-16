import React, { useContext, useEffect, useRef, useState } from 'react'
import addnotepng from "../../assets/addnote.png"
import StickyContext from '../../ContextApi/StickyNotesContext/StickyContext'
import StickyNotes from '../Cards/StickyNotesCard/StickyNotes'
import "./sticky.css"

function StickyWall() {


    const context = useContext(StickyContext)
    const { stickyNotes, getAllStickyNotes, addStickyNote } = context
    const [isModalOpen, setModalOpen] = useState(false);

    const [note, setNote] = useState({ content: '', color: '' })

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            getAllStickyNotes()
        } else {
            navigate("/login")
        }
    }, [])

    const modalRef = useRef(null);

    const handleSave = async (e) => {
        e.preventDefault()
        try {
            await addStickyNote(note.content, note.color)
            alert("StickyNote Added")
            setNote({ color: '', content: '' })
            await getAllStickyNotes();
            setModalOpen(false)
        } catch (error) {
            console.error("Failed to add note:", error);
            alert("Error adding note. Please try again.");
        }
    }


    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div>
                    <div ref={modalRef} className={`modal fade ${isModalOpen ? 'show' : ''}`} style={{ display: isModalOpen ? 'block' : 'none' }} aria-labelledby="exampleModalLabel" aria-hidden={!isModalOpen}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <label htmlFor="color" className='m-2'><strong>Color:</strong></label>
                                    <select onChange={onChange} name="color" >
                                        <option value="red" style={{ color: "red" }}>Red</option>
                                        <option value="orange" style={{ color: "orange" }}>orange</option>
                                        <option value="blue" style={{ color: "blue" }}>blue</option>
                                        <option value="green" style={{ color: "green" }}>green</option>
                                        <option value="black" style={{ color: "black" }}>black</option>
                                    </select>
                                </div>
                                <div className="modal-body d-flex ">
                                    <label htmlFor="content" className='m-2'><strong>Content:</strong></label>
                                    <textarea className="modal-title rounded-4 " name='content' onChange={onChange} cols={30} rows={4} maxLength={50}></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dashboardHeading'>
                    <h1>StickyWall</h1>
                </div>
                <div>
                    <button
                        type='button'
                        className="addNotebtn btn btn-primary"
                        onClick={()=> setModalOpen(true)}
                        ><img src={addnotepng} alt="addnote" /><span style={{ color: "black" }}>Add StickyNote</span></button>
                </div>
                <div className="container">
                    <div className='row gy-2 my-3'>
                        {stickyNotes.length > 0 ?
                            stickyNotes.slice().reverse().map((notes) => (
                                <StickyNotes key={notes._id} notes={notes} />
                            )) : <p>No Notes available</p>}
                    </div>
                </div>
        </>
    )
}

export default StickyWall
