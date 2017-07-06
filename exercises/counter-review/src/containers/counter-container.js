import React from "react";
import autoBind from "react-autobind";

import Counter from "../components/counter.js"

class CounterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 10,
      style : {
        textAlign: "center",
        color: "hotpink",
        backgroundColor: "black"
      }
    };
    autoBind(this);
  }
  up() {
    this.setState({
      counter: this.state.counter + 1,
      style: {
        ...this.state.style,
        color: "green",
        backgroundColor: "hotpink"
      }
    });
  }
  down() {
    this.setState({
      counter: this.state.counter - 1,
      style: {
        ...this.state.style,
        color: "red",
        backgroundColor: "purple"
      }
    });
  }
  render() {
    return (
      <div>
        <Counter style={this.state.style} handleUp={this.up} handleDown={this.down} counter={this.state.counter}/>
      </div>
    )
  }
}

export default CounterContainer;
