import React, { useState, useEffect } from 'react'; 
import "./styles.css";

import qoute1 from "../../assets/bnQoute.jpg";
import qoute2 from "../../assets/bnQoute3.png";
import qoute3 from "../../assets/catbn.jpg";
import bg1 from "../../assets/bg1.png";
import logo from "../../assets/logo.png";

function VisualsContainer() {
    const images = [bg1, qoute1, qoute2, qoute3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false); // Manages fade animation

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(true); 

            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(false); 
            }, 1000); 
        }, 6000); 

        return () => clearInterval(intervalId); 
    }, [images.length]);

    return (
        <div>
            <div className="ilogo">
                <img src={logo} alt="Logo" />
            </div>
            <div className='visulaContainer'>
                <div className='imagesContainer'>
                    <img src={images[currentImageIndex]} alt="Background" className={fade ? 'fade' : ''} />
                </div>
                <div className='textContainer'>
                    <h2>Every small step leads to big achievements—organize today for a brighter tomorrow.</h2>
                </div>
            </div>
        </div>
    );
}

export default VisualsContainer;
