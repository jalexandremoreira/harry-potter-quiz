import React, { Component } from "react";
import ResultsFlavor from "./resultsFlavorText";
import ResultsPercentage from "./resultsPercentage";
import { Link } from "react-router-dom";

class ShowResults extends Component {
  state = {
    tally: {
      correct: 0,
      wrong: 0
    }
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
      <React.Fragment>
        {correct >= 0 && wrong >= 0 && (
          <ResultsPercentage correct={correct} wrong={wrong} />
        )}
        <ResultsFlavor correct={correct} wrong={wrong} />
        <Link to="/" className={`button default`}>
          Go back home
        </Link>
        <Link to="/quiz" className={`button default`}>
          New Quiz
        </Link>
      </React.Fragment>
    );
  }
}

export default ShowResults;
