import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShowResults extends Component {
  state = {
    tally: {}
  };

  componentWillMount() {
    const tally = JSON.parse(localStorage.getItem("tally"));

    this.setState({ tally });
  }

  showTally = (
    <div>
      <p>Correct: {this.state.tally.correct}</p>
      <p>Wrong: {this.state.tally.wrong}</p>
      <p>Percentage: {(this.state.tally.correct * 100) / 20}</p>
    </div>
  );

  render() {
    const { correct, wrong } = this.state.tally;
    return (
      <React.Fragment>
        {/* {(this.state.tally.correct === 0 && this.state.tally.wrong === 0 && (
          <div>No score to show. Play a game first.</div>
        )) ||
          this.showTally} */}
        <div>
          <p>Correct: {correct}</p>
          <p>Wrong: {wrong}</p>
          <p>Percentage: {(correct * 100) / 20}%</p>
        </div>
        <Link to="/">
          <div className={`button default`}>Go back home</div>
        </Link>
      </React.Fragment>
    );
  }
}

export default ShowResults;
