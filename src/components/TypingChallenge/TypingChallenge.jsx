import React from 'react';
import "./TypingChallenge.css";
import TestLetter from '../TestLetter/TestLetter';

const TypingChallenge = ({ timerStarted, timeRemaining, testInfo, onInputChange }) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}</p>
                <p className="timer-info">
                    { !timerStarted && "Start typing to start the test" }
                </p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {/* { selectedParagraph } */}
                        {
                            testInfo.map((eachLetter, index) => {
                                return (
                                    <TestLetter
                                        key={index} 
                                        individualLetter={eachLetter}/> 
                                )
                            })
                        }
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea
                        onChange={(e) => onInputChange(e.target.value)} 
                        placeholder="Start typing..." 
                        cols="30" rows="10" className="textarea">
                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default TypingChallenge;