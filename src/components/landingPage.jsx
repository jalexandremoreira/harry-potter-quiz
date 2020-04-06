import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <React.Fragment>
      <h1 id="landing-page-h1" style={{ textAlign: "center" }}>
        Harry Potter Quiz
      </h1>
      <p id="landing-page-link">
        Click{" "}
        <Link to="/quiz" style={{ fontStyle: "italic" }}>
          here
        </Link>{" "}
        to start the quiz.
      </p>
    </React.Fragment>
  );
};

export default LandingPage;
