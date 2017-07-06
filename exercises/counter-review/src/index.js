import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";
import CounterContainer from "./containers/counter-container.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <CounterContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
