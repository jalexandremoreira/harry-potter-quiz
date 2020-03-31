import React, { Component } from "react";
import { getQuestions } from "./../services/easyQuestionsService";
import { arrayScrambler } from "./arrayScrambler";
import IndividualQuestions from "./individualQuestions";

class DisplayQuestions extends Component {
  state = {
    questions: [],
    question: undefined,
    index: 0
  };

  componentDidMount() {
    const questions = arrayScrambler(getQuestions());
    this.setState({
      questions,
      question: questions[this.state.index],
      answers: questions[this.state.index].answers
    });
  }

  handleClick(i) {
    this.setState({ selectedId: i });
    i ? console.log("true!") : console.log("false!");
  }

  handleNextQuestion = () => {
    const index = this.state.index + 1;
    this.setState({
      index,
      question: this.state.questions[index]
    });
  };

  render() {
    const { question, answers, index, selectedId } = this.state;

    const styleForCorrectAnswer = {
      backgroundColor: "green"
    };

    const styleForWrongAnswer = {
      backgroundColor: "red"
    };

    const styleForDefaultAnswer = {
      backgroundColor: "white"
    };

    return (
      <div className="custom-container">
        <IndividualQuestions
          question={this.state.question}
          handleNextQuestion={this.handleNextQuestion}
          // answers={this.state.answers}
        />
        <div>
          {/* <h2> Question number: {index + 1} </h2>
          <p> {question.question} </p>

          {arrayScrambler(answers).map((i, index) => (
            <div key={index}>
              <button
                style={
                  i.id === selectedId && i.isCorrect
                    ? styleForCorrectAnswer
                    : i.id === selectedId && !i.isCorrect
                    ? styleForWrongAnswer
                    : styleForDefaultAnswer
                }
                onClick={() => this.handleClick(i.id)}
              >
                {i.answer}
              </button>
            </div>
          ))}
          <div>
            {(index <= 18 && (
              <button onClick={this.handleNextQuestion}>Next Question</button>
            )) || <button>View Results</button>}
          </div> */}
        </div>
      </div>
    );
  }
}

export default DisplayQuestions;
