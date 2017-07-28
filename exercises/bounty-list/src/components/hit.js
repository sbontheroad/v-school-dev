//RENDER OUT HIT

import React from "react";


class Hit extends React.Component {
  render() {
    return (
      <div className="hit-wrapper">
        <p>{this.props.hit.name}</p>
        <p>{this.props.hit.location}</p>
        <p>{this.props.hit.price}</p>
        <p>{this.props.hit.wanted}</p>
      </div>
    )
  }
}

export default Hit;
