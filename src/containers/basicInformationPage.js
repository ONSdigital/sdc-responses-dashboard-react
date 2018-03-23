import React, { Component } from "react";
import styled from "styled-components";
import InfoPanel from "../components/infobox";

const HalfCanvas = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Canvas = styled.div`
  margin: 0 5em;
`;
class BasicInfoPage extends Component {
  render() {
    return (
      <Canvas>
        <HalfCanvas>
          <InfoPanel number={1} type="download" />
          <InfoPanel number={50} type="upload" />
        </HalfCanvas>
        <HalfCanvas>
          <InfoPanel number={900} type="reged" />
        </HalfCanvas>
      </Canvas>
    );
  }
}

export default BasicInfoPage;
