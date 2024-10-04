import React, { useContext, useEffect, useState } from 'react'
import "./Wel.css"
import quotepng from "../../assets/bnQoute.jpg"
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import AuthContext from '../../ContextApi/AuthContext/AuthContext';

function RightBar() {
    const [time, setTime] = useState(new Date());
    const [value, onChange] = useState(new Date());

    const context = useContext(AuthContext)
    const { username } = context

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <div className='container rightBar'>
                <div className='calenderContainer'>
                    <Calendar className="calender" onChange={onChange} value={value} />
                </div>
                <div className="welcomeContainer">
                    <div className='WelcomeHeader'>
                        <h2>Welcome {username}!</h2>
                    </div>
                    <div className="inspPicture">
                        <img src={quotepng} alt="" />
                    </div>
                    <div className="qoute">
                        <h3>Do your best!</h3>
                    </div>
                    <div className='showTime'>
                        <p>Current Time: {time.toLocaleTimeString()}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightBar
