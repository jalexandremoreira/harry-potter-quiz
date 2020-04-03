import React, { Component } from "react";
import { getFlavorText } from "./../services/flavorText";

class ResultsFlavor extends Component {
  state = { flavor: undefined };

  componentDidMount() {
    this.calculateFlavor();
  }

  calculateFlavor = () => {
    if (this.props.correct >= 0 && this.props.wrong > 0) {
      const percentage = (this.props.correct * 100) / 20;
      console.log(percentage);
      this.setState(
        { flavor: getFlavorText(percentage) },
        console.log(getFlavorText(percentage))
      );
    } else {
      this.setState({ flavor: "You have to play frist!" });
    }
  };

  render() {
    const { flavor } = this.state;

    return (
      <div>
        <p>{flavor}</p>
      </div>
    );
  }
}

export default ResultsFlavor;
