import React from "react";

class DjApp extends React.Component {
  render() {
    return (
      <div>
        <div style={this.props.style}  onMouseOver={()=>{this.props.handleHover()}} onMouseLeave={()=>{this.props.handleCircle()}} onClick={() =>
          {this.props.handleClick()}} className="shape"></div>
      </div>
    )
  }
}

export default DjApp;
