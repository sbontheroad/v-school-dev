import React from "react";
import ReactDOM from "react-dom";

//import files
import "./index.css";
import PortNav from "./portNav.js";
import Landing from "./landing.js";
import Portfolio from "./portfolio.js";
import About from "./about.js";
import Contact from "./contact.js";
import Footer from "./footer.js";
import Copyright from "./copyright.js"

class App extends React.Component {
  render () {
    let navLinks = [
      {
        text: "Portfolio",
        url: "#"
      },
      {
        text: "About",
        url: "#"
      },
      {
        text: "Contact",
        url: "#"
      }
    ]
    return (
      <PortNav brand={"Sarah Baldwin"} links={navLinks} />
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
