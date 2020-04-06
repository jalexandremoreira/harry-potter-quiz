import React from "react";

const ResultsPercentage = (props) => {
  const { correct, wrong } = props;
  return (
    <div className="show-results">
      <p>
        <i className="fas fa-check-circle" style={{ marginRight: "0.6em" }} />{" "}
        Correct: {correct}
      </p>
      <p>
        {" "}
        <i
          className="fas fa-times-circle"
          style={{ marginRight: "0.6em" }}
        />{" "}
        Wrong: {wrong}
      </p>
      <p>
        {" "}
        <i
          className="fas fa-percentage"
          style={{ marginRight: "0.6em" }}
        />{" "}
        Percentage: {(correct * 100) / 20}%
      </p>
    </div>
  );
};

export default ResultsPercentage;
