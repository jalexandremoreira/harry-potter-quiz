import React, { Component } from "react";

import MapAnswers from "./mapAnswers";
import LoadingBar from "./loadingBar";
import QuizBottomButtons from "./quizBottomButtons";
// import NextQuestionButton from "./nextQuestionButton";

class IndividualQuestions extends Component {
  state = {
    selectedId: undefined,
  };

  handleClick = (answer, id) => {
    this.updateTally(answer);
    this.setState({ selectedId: id });

    setTimeout(() => {
      if (this.props.index <= 18) {
        this.props.handleNextQuestion();
        this.setState({ selectedId: undefined });
      } else {
        // this.setState({ showResults: true });
        this.props.history.push("/showResults");
      }
    }, 1500);
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
        <div className="answers-div">
          <MapAnswers
            question={question}
            selectedId={selectedId}
            handleClick={this.handleClick}
          />
          <LoadingBar selectedId={selectedId} />
          <QuizBottomButtons setGame={this.setGame} />
        </div>
      </div>
    );
  }
}

export default IndividualQuestions;
