import React, { Component } from "react";
import { Link } from "react-router-dom";

import MapAnswers from "./mapAnswers";
import NextQuestionButton from "./nextQuestionButton";

class IndividualQuestions extends Component {
  state = {
    selectedId: undefined,
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

  updateTally = (answer) => {
    const tally = { ...this.props.tally };

    answer.isCorrect ? (tally.correct += 1) : (tally.wrong += 1);
    this.props.updateTally(tally);
  };

  setGame = () => {
    this.setState({ selectedId: undefined });
    this.props.setGame();
  };

  render() {
    const { question, index } = this.props;
    const { selectedId } = this.state;

    return !this.props.question ? (
      <div></div>
    ) : (
      <div>
        <h3 id="quiz-page-question-tracker">Question #{index + 1} of 20:</h3>

        <p id="quiz-page-question">{question.question}</p>

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

        <div>
          <div
            className="button default small"
            onClick={this.setGame}
            style={{ marginLeft: "60px" }}
          >
            Reset
          </div>
          <Link to="/">
            <div className="button default small">Go back home</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default IndividualQuestions;
