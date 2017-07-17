import React from "react";

class Name extends React.Component {
  render() {
    return (
      <div>
        <h3 className="output">{this.props.randomName}</h3>
      </div>
    )
  }
}

export default Name;
