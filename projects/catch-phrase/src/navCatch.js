import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";

class NavCatch extends React.Component {
  render() {
    let links = this.props.links.map((item) => {
      return <NavItem href={item.link}>{item.text}</NavItem>
    });
    let brand = <Navbar.Brand className="brand"><a href={this.props.brand.link}>{this.props.brand.text}</a></Navbar.Brand>
    return (
      <Navbar className="navbar navbar-inverse navbar-custom">
        <Navbar.Header>
          {brand}
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight className="navLinks">
            {links}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavCatch;
