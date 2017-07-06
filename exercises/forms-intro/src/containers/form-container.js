import React from "react";
import autoBind from "react-autobind";

import Form from "../components/form.js";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      names: ["Jordan", "Kacie"],
      nameValue: ""
    }
    autoBind(this);
  }
  input(event) {
    this.setState({
      ...this.state,
      nameValue: event.target.value
    });
  }
  click() {
    this.setState({
      ...this.state,
      names: [...this.state.names, this.state.nameValue],
      nameValue: ""
    });
  }
  remove(index) {
    let oldNames = [...this.state.names];
    oldNames.splice(index, 1);
    this.setState({
      ...this.state,
      names: oldNames
    });
  }
  render() {
    return (
      <div>
          <Form handleRemove={this.remove} nameValue={this.state.nameValue}  handleInput={this.input} handleClick={this.click} onbrand="Atom Sucks Balls" names={this.state.names}/>

      </div>
    )
  }
}

export default FormContainer;
