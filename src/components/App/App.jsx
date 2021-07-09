import React from 'react';
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const totalTime = 60;

class App extends React.Component {
    state = {
        selectedParagraph: "A labore facilis quae vel enim distinctio aperiam sit, placeat laborum nisi rem. Temporibus voluptatem soluta ipsa ullam quos quas esse mollitia",
        timerStarted: false,
        timeRemaining: totalTime,
        words: 0,
        characters: 0,
        wpm: 0
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
                />
                <Footer />
            </div>
        )
    }
}

export default App;