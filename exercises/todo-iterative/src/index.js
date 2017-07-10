import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";

import TodoContainer from "./containers/todo-container.js";


class App extends React.Component {
  render() {
    return (
      <div>
        <TodoContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
