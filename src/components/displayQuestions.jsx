import React, { Component } from "react";

import IndividualQuestions from "./individualQuestions";
import { combinedQuestions } from "./combinedQuestions";
import { Link } from "react-router-dom";

class DisplayQuestions extends Component {
  state = {
    questions: [],
    tally: {
      correct: 0,
      wrong: 0
    },
    index: -1
  };

  // componentWillMount() {
  //   const tally = localStorage.getItem("tally");

  //   if (tally) {
  //     this.setState({
  //       tally: JSON.parse(tally)
  //     });
  //   }
  // }

  componentDidMount() {
    this.setGame();
  }

  setGame = () => {
    const questions = combinedQuestions();
    this.setState({
      questions,
      index: 0,
      tally: {
        wrong: 0,
        correct: 0
      }
    });
  };

  onNextQuestion = () => {
    const index = this.state.index + 1;
    this.setState({
      index,
      question: this.state.questions[index]
    });
  };

  // onViewResults = () => {
  //   alert(
  //     `correct: ${this.state.tally.correct}
  //     wrong: ${this.state.tally.wrong}`
  //   );
  // };

  updateTally = tally => {
    this.setState({ tally });
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("tally", JSON.stringify(nextState.tally));
    localStorage.setItem("tallyDate", Date.now());
  }

  render() {
    const { questions, index, tally } = this.state;

    return (
      <div className="custom-container">
        <IndividualQuestions
          question={questions[index]}
          index={index}
          tally={tally}
          handleNextQuestion={this.onNextQuestion}
          onViewResults={this.onViewResults}
          updateTally={this.updateTally}
        />
        <div className="button default" onClick={this.setGame}>
          Reset
        </div>
        <Link to="/" className={`button default`}>
          Go back home
        </Link>
      </div>
    );
  }
}

export default DisplayQuestions;
