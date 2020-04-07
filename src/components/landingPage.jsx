import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <h1 id="landing-page-h1" style={{ textAlign: "center" }}>
        Harry Potter Quiz
      </h1>
      <p id="disclaimer">
        Made for fun. I do not own the rights to any of the following names and
        characters.
      </p>
      <p id="landing-page-link">
        {/* Click{" "} */}
        <Link to="/quiz" style={{ fontStyle: "italic" }}>
          Click here to start the quiz.
        </Link>{" "}
        {/* to start the quiz. */}
      </p>
    </div>
  );
};

export default LandingPage;
