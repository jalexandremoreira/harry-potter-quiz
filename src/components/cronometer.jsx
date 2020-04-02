import React, { Component } from "react";

class Cronometer extends Component {
  state = { startTime: undefined };
  render() {
    return <div>{this.state.startTime}</div>;
  }
}

export default Cronometer;
