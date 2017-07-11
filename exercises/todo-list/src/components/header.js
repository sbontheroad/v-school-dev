import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid header">
          <h1>V School To Do List</h1>
          <input onChange={this.props.change} value={this.props.value} onKeyPress={(e)=>{this.props.keyPress(e)}} className="input" placeholder="What do you need to get done?"/>
        </div>
      </div>
    )
  }
}

export default Header;
