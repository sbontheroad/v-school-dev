import React from "react";
import ReactDOM from "react-dom";

//router
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./css/index.css";
import Navbar from "./components/navbar.js";
import HomeContainer from "./containers/home-container.js";
import ProductFormContainer from "./containers/product-form-container.js";
import ProductListContainer from "./containers/product-list-container.js";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <BrowserRouter>
          <div>
            <Navbar />
              <Switch>
                  <Route exact path="/" component={HomeContainer} />
                  <Route exact path="/addproduct" component={ProductFormContainer} />
                  <Route exact path="/shop" component={ProductListContainer} />
              </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
