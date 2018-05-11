import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import PropTypes from "prop-types";

const TimerSection = styled.div`
  font-size: 2em;
`;

class UpdateTimer extends Component {
  static propTypes = {
    timeUpdated: PropTypes.number
  };
  constructor(props) {
    super(props);
    this.state = { date: moment(this.props.timeUpdated).calendar() };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ date: moment(nextProps.timeUpdated).calendar() });
  }

  render() {
    return (
      <TimerSection>
        &nbsp; Last Updated: &nbsp;
        {this.state.date}
      </TimerSection>
    );
  }
}

export default UpdateTimer;
