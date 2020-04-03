import React, { Component } from "react";
import { Link } from "react-router-dom";

import MapAnswers from "./mapAnswers";
import NextQuestionButton from "./nextQuestionButton";

class IndividualQuestions extends Component {
  state = {
    selectedId: undefined
  };

  handleClick = (answer, id) => {
    this.updateTally(answer);
    this.setState({ selectedId: id });
  };

  handleNextQuestion = () => {
    this.props.handleNextQuestion();
    this.setState({ selectedId: undefined });
  };

  handleViewResults = () => {
    this.props.onViewResults();
  };

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

        <MapAnswers
          question={question}
          selectedId={selectedId}
          handleClick={this.handleClick}
        />
        <NextQuestionButton
          index={index}
          selectedId={selectedId}
          handleNextQuestion={this.handleNextQuestion}
        />
      </div>
    );
  }
}

export default IndividualQuestions;
