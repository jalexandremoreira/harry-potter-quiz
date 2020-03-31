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

  handleClick(id) {
    debugger;
    this.setState({ selectedId: id });
  }
  handleNextQuestion() {
    this.props.handleNextQuestion();
    this.setState({ selectedId: undefined });
  }

  render() {
    return !this.props.question ? (
      <div></div>
    ) : (
      <div>
        <span>{this.props.question.question}</span>
        {this.props.question.answers.map((answer, index) => (
          <div key={index}>
            <div
              className={`${
                answer.answerId === this.state.selectedId ? "green" : ""
              } ${this.state.selectedId ? "disabled" : ""}`}
              onClick={() => this.handleClick(answer.answerId)}
            >
              {answer.answer}
            </div>
          </div>
        ))}
        <div
          className={` ${this.state.selectedId ? "" : "disabled"}`}
          onClick={() => this.handleNextQuestion()}
        >
          Next Question
        </div>
      </div>
    );
  }
}

export default IndividualQuestions;
