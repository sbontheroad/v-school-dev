import React from "react";
import ReactDOM from "react-dom";

//router
import {Route, BrowserRouter, Switch} from "react-router-dom";

import Navbar from "./components/navbar.js";
import HomeContainer from "./containers/home-container.js";
import ContactContainer from "./containers/contact-container.js";
import BlogContainer from "./containers/blog-container.js";
import ArticleContainer from "./containers/article-container.js";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <BrowserRouter>
          <div>
                <Navbar />
                <Switch>
                  <Route exact path="/" component={HomeContainer}/>
                  <Route exact path="/contact" component={ContactContainer}/>
                  <Route exact path="/blog" component={BlogContainer} />
                  <Route exact path="/article/:index" component={ArticleContainer} />
                </Switch>
            </div>
          </BrowserRouter>
        </div>
        )
      }
    }

    ReactDOM.render(<App />, document.querySelector("#root"));
