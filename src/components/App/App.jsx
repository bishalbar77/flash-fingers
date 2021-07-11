import React from 'react';
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const totalTime = 60;
const API = "http://metaphorpsum.com/paragraphs/1/11";

class App extends React.Component {
    state = {
        selectedParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        testInfo: [],
        timerStarted: false,
        timeRemaining: totalTime,
        words: 0,
        characters: 0,
        wpm: 0
    };

    startTimer = () => {
        this.setState({ timerStarted: true });
        const timer = setInterval(() => {
            if(this.state.timeRemaining > 0) {
                this.setState({ timeRemaining: this.state.timeRemaining-1 })
            } else {
                clearInterval(timer);
            }
        }, 1000)
    };

    handleUserInput = (inputValue) => {
        if(!this.state.timerStarted) {
            this.startTimer();
        }
    }

    componentDidMount () {
        fetch(API).then((response) => response.text()).then((data) => {
            this.setState({ selectedParagraph: data});
            const selectedParagraphArray = this.state.selectedParagraph.split("");
            const testInfo = selectedParagraphArray.map(selectedLetter => {
                return {
                    testLetter :selectedLetter,
                    status: "notAttempted",
                };
            });
            this.setState({ testInfo });
        });
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
                />
                <Footer />
            </div>
        )
    }
}

export default App;