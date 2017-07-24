install React from "react";
install ReactDOM from "react-dom"

install "./css/index.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">

      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
