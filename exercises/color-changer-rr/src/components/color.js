import React from "react";

class Color extends React.Component {
  render() {
    return (
      <div className="color-wrapper">
        <div className="color-box" style={{backgroundColor:`${this.props.color}`}}>
          <button className="button-custom" onClick={() => {this.props.handleClick()}}>COLOR</button>
        </div>
        <div className="show-color">
          <p>{this.props.name}</p>
        </div>
      </div>
    )
  }
}

export default Color;
