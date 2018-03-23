import React, { Component } from "react";
import BasicInfoFrame from "./containers/basicInformationPage";
import Header from "./components/header";
import UpdateTimer from "./containers/updateTimer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <BasicInfoFrame />
        <UpdateTimer />
      </React.Fragment>
    );
  }
}

export default App;
