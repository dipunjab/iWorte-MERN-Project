import React, { useEffect, useState } from 'react'
import "./Wel.css"
import quotepng from "../../assets/bnQoute.jpg"

function Welsec() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
  return (
    <>
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

export default Welsec
