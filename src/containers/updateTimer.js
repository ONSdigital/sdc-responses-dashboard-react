import React, { Component } from "react";
import styled from "styled-components";

const TimerSection = styled.div`
  font-size: 2em;
`;

class UpdateTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <TimerSection>
        Last Updated: {this.state.date.getHours()}:{this.state.date.getMinutes()}
        {"  "}
        {this.state.date.toLocaleDateString()}
      </TimerSection>
    );
  }
}

export default UpdateTimer;
