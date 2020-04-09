import React, { Component } from "react";

class MapAnswers extends Component {
  render() {
    const { question, selectedId } = this.props;
    return (
      <React.Fragment>
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
            onClick={() => this.props.handleClick(answer, answer.id)}
          >
            {answer.answer}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default MapAnswers;
