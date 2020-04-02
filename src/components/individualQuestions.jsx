import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { arrayScrambler } from "./arrayScrambler";

class IndividualQuestions extends Component {
  state = {
    selectedId: undefined
  };

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
          Question number {index + 1}:<p>{question.question}</p>
        </h3>
        {question.answers.map((answer, index) => (
          <div
            key={index}
            className={`button ${!selectedId ? "default" : ""} ${
              answer.id === selectedId && answer.isCorrect ? "green" : ""
            } ${answer.id === selectedId && !answer.isCorrect ? "red" : ""} 
              ${
                selectedId && answer.id !== selectedId && answer.isCorrect
                  ? "green"
                  : ""
              }
              ${
                selectedId && answer.id !== selectedId && !answer.isCorrect
                  ? "disabled"
                  : ""
              } `}
            onClick={() => this.handleClick(answer, answer.id)}
          >
            {answer.answer}
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
          <Link to="/showResults">
            <div className={`button ${selectedId ? "default" : "disabled"}`}>
              View Results
            </div>
          </Link>
        )}
      </div>
    );
  }
}

export default IndividualQuestions;
