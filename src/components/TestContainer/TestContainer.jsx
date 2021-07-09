import React from 'react';
import "./TestContainer.css";
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';

const TestContainer = ({ selectedParagraph, words, characters, wpm, timeRemaining, timerStarted}) => {
    return (
        <div className="test-container">
            {
                timeRemaining > 0 ? 
                ( 
                <div data-aos="fade-up" className="typing-challenge-container">
                    <TypingChallengeContainer 
                        selectedParagraph={selectedParagraph}
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted}
                    />
                </div> 
                ) : ( 
                <div className="try-again-container">
                    <TryAgain words={words} characters={characters} wpm={wpm} />
                </div> 
                )
            }
            
        </div>
    )
}

export default TestContainer;