import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import download from "./Download.svg";
import upload from "./Upload.svg";
import reged from "./Reged.svg";

const TextPanel = styled.div`
  font-family: helvetica;
  font-size: 2em;
  font-weight: 900;
  text-align: center;
`;

const NumberPanel = styled.div`
  font-family: helvetica;
  font-size: 6em;
  font-weight: 900;
`;

const Icon = styled.img`
  height: 1.5em;
  vertical-align: middle;
`;

const Container = styled.div`
  display: inline-block;
  margin: auto;
  text-align: center;
  align-items: center;
  max-width: 15em;
  max-height: 8em;
  padding: 5em;
  border-color: black;
  border-style: solid;
`;

class InfoPanel extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    number: PropTypes.number
  };

  render() {
    let icon = null;
    let text = null;

    switch (this.props.type) {
      case "download":
        icon = <Icon src={download} />;
        text = "Downloads";
        break;
      case "upload":
        icon = <Icon src={upload} />;
        text = "Uploads";
        break;
      case "reged":
        icon = <Icon src={reged} />;
        text = "Registered";
        break;
      default:
      break;
    }


    return (
      <Container>
        <NumberPanel> {this.props.number} </NumberPanel>
        <TextPanel>
          {text} {icon}
        </TextPanel>
      </Container>
    );
  }
}

export default InfoPanel;
