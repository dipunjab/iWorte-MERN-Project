import React from 'react'
import "./sidebar.css"
import homepng from "../../assets/home.png"
import notepng from "../../assets/note.png"
import taskpng from "../../assets/tasks.png"
import stickynotepng from "../../assets/sticky.png"
import settingpng from "../../assets/setting.png"
import logoutpng from "../../assets/logout.png"


function SideBar() {
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
                            <li><img src={homepng} alt="homelogo" />DashBoard</li>
                            <li><img src={notepng} alt="" />Notes</li>
                            <li><img src={taskpng} alt="" />Tasks</li>
                            <li><img src={stickynotepng} alt="" />StickyWall</li>
                        </ul>
                    </nav>
                </div>
                <div className='lower-items'>
                    <nav className='nav-item'>
                        <ul className='nav-item-ul'>
                            <li>Mode</li>
                            <li><img src={settingpng} alt="" />Settings</li>
                            <li><img src={logoutpng} alt="" />Logout</li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Deisgn for mobile */}
            <div className='sidebar-mobile'>
                <div className='items-mobile'>
                    <nav className='nav-item-mobile'>
                        <ul className='nav-item-ul-mobile'>
                            <li><img src={homepng} alt="homelogo" /></li>
                            <li><img src={notepng} alt="notelogo" /></li>
                            <li><img src={taskpng} alt="tasklogo" /></li>
                            <li><img src={stickynotepng} alt="stickynotelogo" /></li>
                            <li><img src={settingpng} alt="settinglogo" /></li>
                            <li><img src={logoutpng} alt="logoutlogo" /></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default SideBar
