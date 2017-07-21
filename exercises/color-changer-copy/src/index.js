import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/";

import "./css/index.css";
import Container from "./containers/container.js";

const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Container />
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
