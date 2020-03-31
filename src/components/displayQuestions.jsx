import React, { Component } from "react";
import { getQuestions } from "./../services/easyQuestionsService";
import { arrayScrambler } from "./arrayScrambler";
import IndividualQuestions from "./individualQuestions";

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
    const questions = arrayScrambler(getQuestions());
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
    console.log(this.state.tally);
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
