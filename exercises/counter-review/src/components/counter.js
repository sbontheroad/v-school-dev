import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <h1>{this.props.counter}</h1>
        <button onClick={() => {
          this.props.handleUp();
        }}>Up</button>
        <button onClick={() => {
          this.props.handleDown();
        }}>Down</button>
      </div>
    )
  }
}

export default Counter;
