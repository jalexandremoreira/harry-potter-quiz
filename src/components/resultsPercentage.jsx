import React from "react";

const ResultsPercentage = props => {
  const { correct, wrong } = props;
  return (
    <div>
      <p>Correct: {correct}</p>
      <p>Wrong: {wrong}</p>
      <p>Percentage: {(correct * 100) / 20}%</p>
    </div>
  );
};

export default ResultsPercentage;
