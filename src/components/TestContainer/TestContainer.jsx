import React from 'react';
import "./TestContainer.css";
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';

const TestContainer = ({
    words,
    characters,
    wpm
}) => {

    return (
        <div className="test-container">
            <div data-aos="fade-up" className="typing-challenge-container">
                <TypingChallengeContainer words={4} characters={10} wpm={50} />
            </div>
            {/* <div className="try-again-container">
                <TryAgain words={4} characters={10} wpm={50} />
            </div> */}
        </div>
    )
}

export default TestContainer;