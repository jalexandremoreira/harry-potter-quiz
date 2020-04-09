import React from "react";

const LoadingBar = (props) => {
  return (
    <div className="quiz-load-bar-div">
      <div className={`loading-bar ${props.selectedId ? "complete" : ""}`}>
        {props.selectedId && "."}
      </div>
    </div>
  );
};

export default LoadingBar;
