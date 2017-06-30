import React from "react";

import Header from "./header.js";

class NavbarBlog extends React.Component {
  render() {
    let navLinks = this.props.links.map((item) => {
      return (
        <li>
          <a href={item.links}>{item.text}</a>
        </li>
      )
    });
    return (
      <nav className="navbar navbar-inverse background">
        <div className="transparency">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              {this.props.brand}
            </a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            {navLinks}
          </ul>
        </div>
        <div>
          <Header/>
        </div>
      </div>
      </nav>
    )
  }
}

export default NavbarBlog;
