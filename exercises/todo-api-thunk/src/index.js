import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/";
import thunk from "redux-thunk";

import Header from "./components/header.js";
import FormContainer from "./containers/form-container.js";
import ListContainer from "./containers/list-container.js";
import Footer from "./components/footer.js";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <FormContainer />
        <ListContainer />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
