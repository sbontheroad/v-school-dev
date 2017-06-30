import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Navbar from "./navbar.js";

//class nameofcomponent
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>hello</h1>
        <h2>it's me</h2>
        <p>p tag fo real</p>


      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
