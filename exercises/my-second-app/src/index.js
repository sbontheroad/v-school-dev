import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import components
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Content from "./content.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand="CatBabies" links={[{text: "Heads", link: "google.com"}, {text: "Tails", link: "yahoo.com"}, {text: "Everything In Between", link: "msn.com"}]}/>
        <Content>
          <p>test</p>
        </Content>
        <Footer/>
      </div>
    )
  }
}
ReactDOM.render(
  <App/>, document.querySelector("#root"));
