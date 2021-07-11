import React from 'react';
import "./TestLetter.css";

const TestLetter = ({ individualLetter }) => {
    const { status } = individualLetter;

    const statusClassName = {
        correct: "correct",
        incorrect: "incorrect",
        notAttempted: "notAttempted"
    }[status];

    // Some lame Logic 
    // let statusClass;
    // if(status === "correct") {
    //     statusClass = "correct";
    // } else if(status === "incorrect") {
    //     statusClass = "incorrect";
    // } else {
    //     statusClass = "notAttempted";
    // }

    return (
        <span className={`test-letter ${statusClassName}`}>{individualLetter.testLetter}</span>
    );
}

export default TestLetter;