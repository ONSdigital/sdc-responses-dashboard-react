import React, { Component } from "react";
import $ from "jquery";
import BasicInfoFrame from "./containers/basicInformationPage";
import Header from "./components/header";
import UpdateTimer from "./containers/updateTimer";
import ErrorPage from "./components/error";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      collection: {
        metadata: {},
        report: {}
      }
    };
  }
  componentDidMount() {
    this.getReport();
  }

  getReport() {
    $.ajax({
      url:
        process.env.REACT_APP_API_ROOT_URL +
        "reporting-api/v1/response-dashboard/collection_exercise/" +
        process.env.REACT_APP_COLLECTION_EXERCISE_ID,
      dataType: "json",
      timeout: 1500
    })
      .done(results => {
        this.setState({ collection: results });
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.error ? (
          <ErrorPage />
        ) : (
          <BasicInfoFrame collection={this.state.collection.report} />
        )}
        <UpdateTimer time={this.state.collection.metadata.timeUpdated} />
      </React.Fragment>
    );
  }
}

export default App;
