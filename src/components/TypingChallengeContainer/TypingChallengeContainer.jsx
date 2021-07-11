import React from 'react';
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypingChallengeContainer = ({ selectedParagraph, words, characters, wpm, timeRemaining, timerStarted, testInfo, onInputChange}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                <ChallengeDetailsCard cardName="Words" cardValue={words}/>
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>
                <ChallengeDetailsCard cardName="WPM" cardValue={wpm}/>
            </div>
            <div className="type-writter-container">
                <TypingChallenge 
                    testInfo={testInfo}
                    selectedParagraph={selectedParagraph}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    onInputChange={onInputChange}
                />
            </div>
        </div>
    )
}

export default TypingChallengeContainer;