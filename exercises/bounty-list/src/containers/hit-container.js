//RENDER OUT Component AND HANDLE LOCAL STATE FOR INPUTS

import React from "react";

import Hit from "../components/hit.js";

class HitContainer extends React.Component {
  render() {
    return (
      <div className="hit-container-wrapper">
        <Hit hit={this.props.hit}/>
      </div>
    )
  }
}

export default HitContainer;
