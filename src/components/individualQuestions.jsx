import React, { Component } from "react";
import { arrayScrambler } from "./arrayScrambler";

class IndividualQuestions extends Component {
  state = {
    selectedId: undefined
  };

  componentDidMount() {}

  // handleClick(isCorrect) {
  //   if (isCorrect === true) console.log("true!");
  //   else console.log("false!");
  // }

  // handleNextQuestion = () => {
  //   const index = this.state.index + 1;
  //   this.setState({ index });
  // };

  handleClick(answer, id) {
    this.updateTally(answer);
    this.setState({ selectedId: id });
  }

  handleNextQuestion() {
    this.props.handleNextQuestion();
    this.setState({ selectedId: undefined });
  }

  handleViewResults() {
    this.props.onViewResults();
  }

  updateTally = answer => {
    const tally = { ...this.props.tally };

    answer.isCorrect ? (tally.correct += 1) : (tally.wrong += 1);
    this.props.updateTally(tally);
  };

  render() {
    const { question, index } = this.props;
    const { selectedId } = this.state;

    return !this.props.question ? (
      <div></div>
    ) : (
      <div>
        <h3>
          Question number {index + 1} {question.question}
        </h3>
        {question.answers.map((answer, index) => (
          <div key={index}>
            <div
              className={`button ${
                answer.id === selectedId && answer.isCorrect ? "green" : ""
              } ${answer.id === selectedId && !answer.isCorrect ? "red" : ""} ${
                selectedId && answer.id !== selectedId ? "disabled" : ""
              } ${!selectedId ? "default" : ""}`}
              onClick={() => this.handleClick(answer, answer.id)}
            >
              {answer.answer}
            </div>
          </div>
        ))}
        {(index <= 18 && (
          <div
            className={`button ${selectedId ? "default" : "disabled"}`}
            onClick={() => this.handleNextQuestion()}
          >
            Next Question
          </div>
        )) || (
          <div
            className="button default"
            onClick={() => this.handleViewResults()}
          >
            View Results
          </div>
        )}
      </div>
    );
  }
}

export default IndividualQuestions;
