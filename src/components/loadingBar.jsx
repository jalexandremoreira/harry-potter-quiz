import React from "react";

const LoadingBar = (props) => {
  return (
    <div id="quiz-load-bad-div">
      <div className={`loading-bar ${props.selectedId ? "complete" : ""}`}>
        {props.selectedId && "."}
      </div>
    </div>
  );
};

export default LoadingBar;
