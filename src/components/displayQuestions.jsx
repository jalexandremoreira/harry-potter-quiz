import React, { Component } from "react";

import IndividualQuestions from "./individualQuestions";

import { getEasyQuestions } from "./../services/easyQuestionsService";
import { arrayScrambler } from "./arrayScrambler";
import { combinedQuestions } from "./combinedQuestions";

class DisplayQuestions extends Component {
  state = {
    questions: [],
    question: undefined,
    tally: {
      wrong: 0,
      correct: 0
    },
    index: 0
  };

  componentDidMount() {
    const questions = arrayScrambler(combinedQuestions());
    this.setState({
      questions,
      question: questions[this.state.index]
    });
  }

  onNextQuestion = () => {
    const index = this.state.index + 1;
    this.setState({
      index,
      question: this.state.questions[index]
    });
  };

  onViewResults = () => {
    alert(
      `correct: ${this.state.tally.correct}
      wrong: ${this.state.tally.wrong}`
    );
  };

  updateTally = tally => {
    this.setState({ tally });
  };

  render() {
    const { question, index, tally } = this.state;

    return (
      <div className="custom-container">
        <IndividualQuestions
          question={question}
          index={index}
          tally={tally}
          handleNextQuestion={this.onNextQuestion}
          onViewResults={this.onViewResults}
          updateTally={this.updateTally}
        />
      </div>
    );
  }
}

export default DisplayQuestions;
