import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Harry Potter Quiz</h1>
      <p>
        Click <Link to="/quiz">here</Link> to start the quiz.
      </p>
    </React.Fragment>
  );
};

export default LandingPage;
