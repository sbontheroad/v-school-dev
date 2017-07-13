import React from "react";
import ReactDOM from "react-dom";

//get the thing that provides store to your app
import { Provider } from "react-redux";
//get the thing that makes the store
import { createStore } from "redux";
//get the reducer to handle state
import reducers from "./reducers/";

//import components
import "./css/index.css";
import FormContainer from "./containers/form-container.js";
import MemeContainer from "./containers/meme-container.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

//create after imports
const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="relative">
          <Header />
          <div className="container container-custom">
            <div className="row">
              <div className="col-md-6">
                <MemeContainer/>
              </div>
              <div className="col-md-6">
                <FormContainer/>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

//give the store to the app through Provider
ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
