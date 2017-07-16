import React from "react";

class Name extends React.Component {
  render() {
    return (
      <div>
        <h3 className="output">{this.props.name}</h3>
      </div>
    )
  }
}

export default Name;
