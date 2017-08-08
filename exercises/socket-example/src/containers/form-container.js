import React from "react";
import autoBind from "react-autobind";

import Form from "../components/form.js";

export default class FormContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      username: "",
      message: ""
    };
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <div>
        <Form input={this.state} handleChange={this.handleChange} />
      </div>
    )
  }
}
