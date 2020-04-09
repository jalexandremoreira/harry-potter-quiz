import React, { Component } from "react";
import ResultsFlavor from "./resultsFlavorText";
import ResultsPercentage from "./resultsPercentage";
import { Link } from "react-router-dom";

class ShowResults extends Component {
  state = {
    tally: {
      correct: 0,
      wrong: 0,
    },
  };

  componentWillMount() {
    if (JSON.parse(localStorage.getItem("tally"))) {
      const tally = JSON.parse(localStorage.getItem("tally"));

      this.setState({ tally });
    }
  }

  render() {
    const { correct, wrong } = this.state.tally;
    return (
      <div className="custom-container">
        <ResultsFlavor correct={correct} wrong={wrong} />
        {correct >= 0 && wrong >= 0 && (
          <ResultsPercentage correct={correct} wrong={wrong} />
        )}
        <div style={{ textAlign: "center", margin: "auto" }}>
          <Link to="/quiz">
            <div className="button default small">New Quiz</div>
          </Link>
          <Link to="/">
            <div className="button default small">Go back home</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShowResults;
