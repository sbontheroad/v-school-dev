import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>REDUX COUNTER</h1>
        <button className="button" onClick={this.props.handleAdd}>+</button>
        <button className="button" onClick={this.props.handleSub}>-</button>
        <h3 className="counter">{this.props.counter}</h3>
      </div>
    )
  }
}

export default Counter;
