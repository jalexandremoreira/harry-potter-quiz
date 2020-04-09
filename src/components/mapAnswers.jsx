import React, { Component } from "react";

class MapAnswers extends Component {
  render() {
    const { question, selectedId } = this.props;
    return (
      <React.Fragment>
        {question.answers.map((answer, index) => (
          <span id="answers-span" key={index}>
            {/* <i className="fas fa-bolt" style={{ marginRight: "-10px" }}></i> */}
            <div
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
            {/* <i className="fas fa-bolt" style={{ marginLeft: "2em" }}></i> */}
          </span>
        ))}
      </React.Fragment>
    );
  }
}

export default MapAnswers;
