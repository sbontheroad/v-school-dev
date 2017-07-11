import React from "react";
import ReactDOM from "react-dom";

//import components
import "./css/index.css";


class App extends React.Component {
  render() {
    return(
      <div>
        test
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
