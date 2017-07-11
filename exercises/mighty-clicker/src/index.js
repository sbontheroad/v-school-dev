import React from "react";
import ReactDOM from "react-dom";

//import components
import ClickerContainer from "./containers/clicker-container.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>score</h1>
        <ClickerContainer />
      </div>
      )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
