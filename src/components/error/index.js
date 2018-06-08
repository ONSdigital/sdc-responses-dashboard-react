import React from "react";
import styled from "styled-components";
import errorIcon from "./icon-error.svg";

const ErrorPanel = styled.div`
  display: inline-block;
  margin: auto;
  text-align: center;
  align-items: center;
  vertical-align: middle;
`;

const ErrorText = styled.div`
  display: inline-block;
  margin: auto;
  text-align: center;
  align-items: center;
  font-size: 3.5em;
  color: red;
  vertical-align: middle;
`;

const ErrorIcon = styled.img`
  height: 5em;
  vertical-align: middle;
  padding: 0 3em;
`;

const ErrorPage = () => (
  <ErrorPanel>
    <ErrorIcon src={errorIcon} />
    <ErrorText>
      Something has gone wrong. <br /> Please try refreshing the page.
    </ErrorText>
    <ErrorIcon src={errorIcon} />
  </ErrorPanel>
);

export default ErrorPage;
