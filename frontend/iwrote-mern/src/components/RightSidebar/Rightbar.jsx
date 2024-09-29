import React, { useEffect, useState } from 'react'
import "./Wel.css"
import quotepng from "../../assets/bnQoute.jpg"
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'

function RightBar() {
    const [time, setTime] = useState(new Date());
    const [value, onChange] = useState(new Date());


    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <div className='calenderContainer'>
                <Calendar className="calender" onChange={onChange} value={value} />
            </div>
            <div className="welcomeContainer">
                <div className='WelcomeHeader'>
                    <h2>Welcome User!</h2>
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
        </>
    )
}

export default RightBar
