import React, { Component } from "react";
import { Link } from "react-router-dom";

class NextQuestionButton extends Component {
  render() {
    const { selectedId, index } = this.props;

    return (
      <React.Fragment>
        {(index <= 18 && (
          <div
            className={`button ${selectedId ? "default" : "disabled"}`}
            onClick={() => this.props.handleNextQuestion()}
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
      </React.Fragment>
    );
  }
}

export default NextQuestionButton;
