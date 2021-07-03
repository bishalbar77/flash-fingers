import React from 'react';
import Flash from "./../../assets/homepage-image.png";
import "./Landing.css";
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return (
        <div className="landing-container">
            <div 
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" 
                className="landing-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewritter-container">
                    <Typewriter
                    options={{
                        strings: ['Fast?', 'Correct?', 'Quick?'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
            </div>
            <div data-aos="fade-left" className="landing-right">
                <img className="flash-image" src={Flash} alt="banner" />
            </div>
        </div>
    )
}

export default Landing;