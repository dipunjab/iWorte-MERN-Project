import React, { useContext } from 'react'
import "./sidebar.css"
import homepng from "../../assets/home.png"
import notepng from "../../assets/note.png"
import taskpng from "../../assets/tasks.png"
import stickynotepng from "../../assets/sticky.png"
import settingpng from "../../assets/setting.png"
import logoutpng from "../../assets/logout.png"
import {Link, useNavigate} from "react-router-dom"
import AuthContext from '../../ContextApi/AuthContext/AuthContext'

function SideBar() {
    const context = useContext(AuthContext)
    const {logout} = context
    const navigate = useNavigate()

    const handleLogout = ()=>{
        logout()
        navigate("/login")    
    }
    return (
        <>
            {/* Design for web */}
            <div className='sidebar'>
                <div className='menuhead'>
                    <h1>Menu</h1>
                </div>
                <div className='upper-items'>
                    <nav className='nav-item'>
                        <ul className='nav-item-ul'>
                            <li><Link to="/" className='linkText'><img src={homepng} alt="homelogo" />DashBoard</Link></li>
                            <li><Link to="/notes" className='linkText'><img src={notepng} alt="" />Notes</Link></li>
                            <li><Link to="tasks" className='linkText'><img src={taskpng} alt="" />Tasks</Link></li>
                            <li><Link to="/stickyWall" className='linkText'><img src={stickynotepng} alt="" />StickyWall</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className='lower-items'>
                    <nav className='nav-item'>
                        <ul className='nav-item-ul'>
                            <li>Mode</li>
                            <li><Link to="/settings" className='linkText'><img src={settingpng} alt="" />Settings</Link></li>
                            <li><Link to='#' className='linkText'  onClick={handleLogout}><img src={logoutpng} alt=""/>Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Deisgn for mobile */}
            <div className='sidebar-mobile'>
                <div className='items-mobile'>
                    <nav className='nav-item-mobile'>
                        <ul className='nav-item-ul-mobile'>
                            <li><Link to="/" className='linkText'><img src={homepng} alt="homelogo" /></Link></li>
                            <li><Link to="/notes" className='linkText'><img src={notepng} alt="notelogo" /></Link></li>
                            <li><Link to="/tasks" className='linkText'><img src={taskpng} alt="tasklogo" /></Link></li>
                            <li><Link to="/stickyWall" className='linkText'><img src={stickynotepng} alt="stickynotelogo" /></Link></li>
                            <li><Link to="/settings" className='linkText'><img src={settingpng} alt="settinglogo" /></Link></li>
                            <li><Link to='#' className='linkText' onClick={handleLogout}><img src={logoutpng} alt="logoutlogo" /></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default SideBar
