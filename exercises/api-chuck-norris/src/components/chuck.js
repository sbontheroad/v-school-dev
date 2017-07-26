import React from "react";

class Chuck extends React.Component {
  render() {
    return (
      <div className="chuck-wrapper">
        <h1>CHUCK NORRIS FACTS</h1>
        <button className="button" onClick={() => {this.props.handleClick()}}>Chuck It</button>
        <h3 className="output">{this.props.joke}</h3>
      </div>
    )
  }
}

export default Chuck;
