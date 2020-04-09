import React from "react";
import { Link } from "react-router-dom";

const QuizBottomButtons = (props) => {
  return (
    <div id="quiz-bottom-buttons">
      <div className="button default small" onClick={props.setGame}>
        Reset
      </div>
      <Link to="/">
        <div className="button default small">Go back home</div>
      </Link>
    </div>
  );
};

export default QuizBottomButtons;
