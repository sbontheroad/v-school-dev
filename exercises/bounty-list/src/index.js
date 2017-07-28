import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import reducers from "./reducers/";
import thunk from "redux-thunk";

import FormContainer from "./containers/form-container.js";
import HitListContainer from "./containers/hit-list-container.js";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <FormContainer />
        <HitListContainer />
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
