import React from "react";
import ReactDOM from "react-dom";

//get the thing that provides store to your app
import { Provider } from "react-redux";
//get the thing that creates the store
import { createStore } from "redux";
//get the reducer to handle state
import reducers from "./reducers/";

import "./css/index.css";
import Header from "./components/header.js";
import FormContainer from "./containers/form-container.js";
import OutputContainer from "./containers/output-container.js";
import Footer from "./components/footer.js";

//create after imports
const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Header/>
                <FormContainer/>
                <OutputContainer/>
        </div>

        <Footer />
      </div>
        )
      }
    }

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
