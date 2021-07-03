import React from 'react';
import "./TryAgain.css";

const TryAgain = ({
    words,
    characters,
    wpm
}) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters: {characters}</b>
                </p>
                <p>
                    <b>Words: {words}</b>
                </p>
                <p>
                    <b>Speed: {wpm}</b>
                </p>
            </div>
            <div className="social-container">
                <button className="button start-again-btn">
                    Re-try
                </button>
                <button 
                    onClick = {() => {
                        window.open("https://www.facebook.com/sharer/sharer.php?u=https://github.com/bishalbar77", "facebook-share-dialog", "width=800,height=600");
                    }}
                    className="button share-btn">
                    Share
                </button>
                <button 
                    onClick = {() => {
                        window.open("https://www.twitter.com/intent/tweet?text=https://github.com/bishalbar77", "Twitter", "width=800,height=600");
                    }}
                    className="button tweet-btn">
                    Tweet
                </button>
            </div>
        </div>
    )
}

export default TryAgain;