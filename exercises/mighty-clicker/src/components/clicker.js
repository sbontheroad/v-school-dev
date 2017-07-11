import React from "react";

class Clicker extends React.Component {
  render () {
    return (
      <div>
        <button onClick={() => {
          this.props.handleClick(this.props.color)}}
          style={{color:this.props.color}}>click</button>
        <h3>{this.props.counter}</h3>
      </div>
    )
  }
}

export default Clicker;
