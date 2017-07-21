import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";
import Header from "./components/header.js";
import FormContainer from "./containers/form-container.js";
import ListContainer from "./containers/list-container.js";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <FormContainer />
        <ListContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
