import React from "react";
import autoBind from "react-autobind";

//import components
import Name from "../components/name.js";

class NameContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      names: [],
      randomName: ""
    }
    autoBind(this);
  }
  render() {
    return (
      <div>
        <Name name={this.state.names} />
      </div>
    )
  }
}

export default NameContainer;
