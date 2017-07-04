import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import SiteContainer from "./container/site-container.js";

let mySites = [
  {
    name: "Japan",
    image: "/images/japan.jpg",
    desc: "Food, mountains, and culture"
  }, {
    name: "Mongolia",
    image: "/images/mongolia.jpg",
    desc: "Nature, reindeer, and culture"
  }, {
    name: "Greece",
    image: "/images/greece.jpg",
    desc: "Boats, beautiful buildings, food"
  }, {
    name: "Iceland",
    image: "/images/iceland.jpg",
    desc: "Hiking, biking, hot springs"
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <SiteContainer sites={mySites}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector("#root"));
