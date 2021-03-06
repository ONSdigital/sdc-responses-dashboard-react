import React from "react";
import styled from "styled-components";
import Clock from "../clock/index";
import logo from "./icon-logo.svg";

const LogoHeader = styled.div`
  padding-left: 3em;
  border: white;
  background-color: rgb(0, 0, 0);
  border-style: solid;
  display: flex;
  border-width: 1px 0;
  align-items: center;
   height: 2em;
`;
const ClockDiv = styled.div`
  position: absolute;
  right: 2em;
  top: 0.6em;
  display: flex;
  align-items: center;
`;
const Header = styled.header`
  background-color: #033e58;
  height: 8em;
  color: white;
`;
const TitleHeader = styled.div`
  padding-left: 3em;
  background-color: #04364e;
  display: flex;
  align-items: center;
  border: white;
  border-style: solid;
  height: 2em;
  border-width: 0 0 1px 0;
`;

const CollExHeader = styled(TitleHeader)`
  height: 4rem;
  font-size: 2rem;
  padding-left: 3rem;
`;

class DashHeader extends React.Component {
  render() {
    return (
      <Header>
        <LogoHeader>
          <img className="logo" src={logo} alt="" /> &nbsp;&nbsp;ONS
          <ClockDiv>
            <Clock />
          </ClockDiv>
        </LogoHeader>
        <TitleHeader>Survey Response Dashboard</TitleHeader>
        <CollExHeader>BRES 2018</CollExHeader>
      </Header>
    );
  }
}

export default DashHeader;
