import React from "react";
import ReactDOM from "react-dom";

//import components
import "./css/index.css";
import Header from "./components/header.js";
import FormContainer from "./containers/form-container.js";
import NameContainer from "./containers/name-container.js";
import Footer from "./components/footer.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="main-wrapper">
          <Header/>
          <div className="container container-custom">
            <FormContainer />
            <div className="row">
              <NameContainer />
            </div>
          </div>

        </div>

        <div className="push"></div>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector("#root"));
