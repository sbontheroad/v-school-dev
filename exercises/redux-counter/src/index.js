import React from "react";
import ReactDOM from "react-dom";

//provides the store for react
import { Provider } from "react-redux";
//creates store
import { createStore } from "redux";
//imports reducers
import reducers from "./reducers/";

//import components
import "./css/index.css";
import CounterContainer from "./containers/counter-container.js";

//create store
const store = createStore(reducers);


class App extends React.Component {
  render() {
    return (
      <div>
        <CounterContainer handleAdd={this.props.addAction} handleSub={this.props.subAction}/>
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
