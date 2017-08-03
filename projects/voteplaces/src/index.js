import React from "react";
import ReactDOM from "react-dom";

//router
import { Route, BrowserRouter, Switch } from "react-router-dom";

//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/";
import thunk from "redux-thunk";

//import components
import "./css/index.css";
import Navbar from "./components/navbar.js";
import FormContainer from "./containers/form-container.js";
import PlacesListContainer from "./containers/places-list-container.js";
import PlacePageContainer from "./containers/place-page-container.js";

//create the store
const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={PlacesListContainer} />
              <Route exact path="/addPlace" component={FormContainer} />
              <Route exact path="/place/:id" component={PlacePageContainer} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
