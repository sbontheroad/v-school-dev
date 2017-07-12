import React from "react";
import ReactDOM from "react-dom";

//import components
import "./css/index.css";
import BadgeContainer from "./containers/badge-container.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <BadgeContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));