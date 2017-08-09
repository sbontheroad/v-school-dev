//MAPS API key
//

import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/";
import thunk from "redux-thunk";

import MapContainer from "./google-map/map-container.js";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render () {
    return (
      <MapContainer />
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
