import React from "react";

import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <img className="logo-navbar" src="http://via.placeholder.com/250x70" alt="logo placeholder"></img>
        <Link className="create-place-nav" to="/addPlace">Create Place</Link>
        <Link className="places-nav" to="/">Places</Link>
      </div>
    )
  }
}

export default Navbar;
