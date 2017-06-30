import React from "react";
import {DropdownButton, MenuItem} from "react-bootstrap";

class Navbar extends React.Component {
  render() {
      console.log(this.props.links);
      let links = this.props.links.map((item) => {
        return (
          <li key={item.text} >
            <a href={item.link}>
              {item.text}
            </a>
          </li>
        )
      });
    return (
      <nav className="navbar navbar-default navbar-custom">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">{this.props.brand}</a>

          </div>
          <ul className="nav navbar-nav">
            {links}
          </ul>
        </div>
      </nav>
    )
  }
}

//to export file to index.js
export default Navbar;
