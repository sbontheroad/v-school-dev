import React from "react";

class Color extends React.Component {
  render() {
    return (
      <div className="color-wrapper">
        <div className="color-box" style={{backgroundColor:`${this.props.color}`}}>
          <button className="button-custom" onClick={() => {this.props.handleClick()}}>COLOR</button>
        </div>
      </div>
    )
  }
}

export default Color;
