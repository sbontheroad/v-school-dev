import React from "react";

import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <img className="logo-navbar" src="http://via.placeholder.com/300x150" alt="logo placeholder"></img>
        <Link to="/">Home</Link>
        <Link to="/addproduct">Add Product</Link>
        <Link to="/shop">Shop</Link>
      </div>
    )
  }
}

export default Navbar;
