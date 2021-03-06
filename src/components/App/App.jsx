import React from 'react';
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import { SAMPLE_PARAGRAPHS } from "../../data/sampleParagraphs";

const totalTime = 60;
const API = "http://metaphorpsum.com/paragraphs/1/11";
const defaultState = {
    selectedParagraph: "Few can name a piecemeal poultry that isn't an unmaimed church. Some posit the uncleaned broker to be less than grating. To be more specific, few can name an hourlong ring that isn't a hallowed plaster. We know that before bangles, violets were only underwears. A witness sees an oboe as a fragile feast. A noodle is a freeborn brother-in-law. A barebacked revolve without squids is truly a dinosaur of spindly pests. A dad is an engine's light. Though we assume the latter, a slave is the relation of a trial. Some posit the hunchbacked hope to be less than grumpy. A nitrogen is an unkissed icicle.",
    testInfo: [],
    timerStarted: false,
    timeRemaining: totalTime,
    words: 0,
    characters: 0,
    wpm: 0
}

class App extends React.Component {
    state = defaultState;

    startTimer = () => {
        this.setState({ timerStarted: true });
        const timer = setInterval(() => {
            if(this.state.timeRemaining > 0) {
                const timeSpent = totalTime - this.state.timeRemaining;
                const wpm = timeSpent > 0 
                    ? (this.state.words / timeSpent) * totalTime 
                    : 0;
                this.setState({
                    timeRemaining: this.state.timeRemaining-1,
                    wpm: parseInt(wpm),
                })
            } else {
                clearInterval(timer);
            }
        }, 1000)
    };

    startAgain = () => this.fetchNewParagraph();

    handleUserInput = (inputValue) => {
        if(!this.state.timerStarted) {
            this.startTimer();
        }

        const characters =inputValue.length;
        const words = inputValue.split(" ").length;
        const index = characters - 1;

        if (index < 0) {
           this.setState({
               testInfo: [
                   {
                       testLetter: this.state.testInfo[0].testLetter,
                       status: "notAttempted",
                   },
                   ...this.state.testInfo.slice(1)
               ],
               characters,
               words,
           }) 
           return;
        }
        if (index >= this.state.selectedParagraph.length) {
            this.setState({ characters, words })
            return;
        }

        // Copy of testInfo
        const testInfo = this.state.testInfo;
        if(!(index === this.state.selectedParagraph.length -1)) {
            testInfo[index + 1].status = "notAttempted";
        }

        // Check for the correct typed letter
        const isCorrect = inputValue[index] === testInfo[index].testLetter;

        // Update the test Info
        testInfo[index].status = isCorrect ? "correct" : "incorrect";

        // Update the state 
        this.setState({
            testInfo,
            words,
            characters
        });
    }

    fetchStaticParagraph = () => {
        const data = SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ]
        this.setState({ selectedParagraph: data});
        const selectedParagraphArray = this.state.selectedParagraph.split("");
        const testInfo = selectedParagraphArray.map(selectedLetter => {
            return {
                testLetter :selectedLetter,
                status: "notAttempted",
            };
        });
        this.setState({ testInfo });
        this.setState({ ...defaultState });
    }

    fetchNewParagraph () {
        // fetch(API).then((response) => response.text()).then((data) => {
            this.setState({ ...defaultState });
        //    this.setState({ selectedParagraph: data});
            const selectedParagraphArray = this.state.selectedParagraph.split("");
            const testInfo = selectedParagraphArray.map(selectedLetter => {
                return {
                    testLetter :selectedLetter,
                    status: "notAttempted",
                };
            });
            this.setState({ testInfo });
        // });
    }
    componentDidMount () {
        this.fetchNewParagraph();
    }

    render() {

        return (
            <div className="app">
                <Nav />
                <Landing />
                <ChallengeSection 
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />
                <Footer />
            </div>
        )
    }
}

export default App;