import React from "react";

import {Link} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        {/* use link tags instead of site instead of a tags, still use a to leave site */}
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
      </div>
    )
  }
}

export default Navbar;
