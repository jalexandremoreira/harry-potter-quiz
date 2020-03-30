import React, { Component } from "react";
import { arrayScrambler } from "./arrayScrambler";

class IndividualQuestions extends Component {
  state = {
    index: 0,
    question: {}
  };

  componentDidMount() {
    console.log(this.props.questions);
    this.setState({ question: this.props.questions[this.state.index] });
  }

  handleClick(isCorrect) {
    if (isCorrect === true) console.log("true!");
    else console.log("false!");
  }

  handleNextQuestion = () => {
    const index = this.state.index + 1;
    this.setState({ index });
  };

  render() {
    const { question, index } = this.state;
    return (
      <div>
        <h2> Question number: {index + 1} </h2>
        <p> {question.question} </p>
        {arrayScrambler(question.answers).map((i, index) => (
          <div key={index}>
            <button onClick={() => this.handleClick(i.isCorrect)}>
              {i.answer}
            </button>
            <button onClick={this.handleNextQuestion}>Next Question</button>
          </div>
        ))}
      </div>
    );
  }
}

export default IndividualQuestions;
