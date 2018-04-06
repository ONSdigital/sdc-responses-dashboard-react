import React, { Component } from "react";
import styled from "styled-components";
import InfoPanel from "../components/infobox";
import PropTypes from "prop-types";

const HalfCanvas = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`;

const Canvas = styled.div`
  margin: 0 5em;
`;
class BasicInfoPage extends Component {
  static propTypes = {
    collection: PropTypes.shape({
      downloads: PropTypes.number.isRequired,
      uploads: PropTypes.number.isRequired,
      accountsCreated: PropTypes.number.isRequired,
      sampleSize: PropTypes.number.isRequired
    })
  };

  render() {
    return (
      <Canvas>
        <HalfCanvas>
          <InfoPanel number={this.props.collection.downloads} type="download" />
          <InfoPanel number={this.props.collection.uploads} type="upload" />
        </HalfCanvas>
        <HalfCanvas>
          <InfoPanel
            number={this.props.collection.accountsCreated}
            type="accountsEnrolled"
          />
          <InfoPanel
            number={this.props.collection.sampleSize}
            type="sampleSize"
          />
        </HalfCanvas>
      </Canvas>
    );
  }
}

export default BasicInfoPage;
