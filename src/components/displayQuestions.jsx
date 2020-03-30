import React, { Component } from "react";
import { getQuestions } from "./../services/easyQuestionsService";
import { arrayScrambler } from "./arrayScrambler";
import IndividualQuestions from "./individualQuestions";

class DisplayQuestions extends Component {
  state = { questions: [], question: {}, answers: [], index: 0 };

  componentDidMount() {
    const questions = arrayScrambler(getQuestions());
    this.setState({
      questions,
      question: questions[this.state.index],
      answers: questions[this.state.index].answers
    });
  }

  handleClick(isCorrect) {
    if (isCorrect === true) console.log("true!");
    else console.log("false!");
  }

  handleNextQuestion = () => {
    const index = this.state.index + 1;
    this.setState({
      index,
      question: this.state.questions[index],
      answers: this.state.questions[index].answers
    });
  };

  render() {
    const { question, answers, index } = this.state;
    return (
      <div className="custom-container">
        {/* <IndividualQuestions questions={this.state.questions} /> */}
        <div>
          <h2> Question number: {index + 1} </h2>
          <p> {question.question} </p>

          {arrayScrambler(answers).map((i, index) => (
            <div key={index}>
              <button onClick={() => this.handleClick(i.isCorrect)}>
                {i.answer}
              </button>
            </div>
          ))}
          <div>
            {(index <= 18 && (
              <button onClick={this.handleNextQuestion}>Next Question</button>
            )) || <button>View Results</button>}
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayQuestions;
