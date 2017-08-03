import React from "react";

import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <img className="logo-navbar" src="http://via.placeholder.com/300x75" alt="logo placeholder"></img>
        <Link to="/">Places</Link>
        <Link to="/addPlace">Create Place</Link>
      </div>
    )
  }
}

export default Navbar;
