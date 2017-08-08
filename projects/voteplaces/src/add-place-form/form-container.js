import React from "react";
import autoBind from "react-autobind";

//redux
import { connect } from "react-redux";
import * as actionCreators from "../actions";

import Form from "../add-place-form/form.js";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      image: "",
      name: "",
      location: "",
      description: ""
    }
    autoBind(this);
  }
handleChange(key, event) {
  this.setState ({
    [key]: event.target.value
  })
}
clearInputs() {
  this.setState ({
    image: "",
    name: "",
    location: "",
    description: ""
  })
}
  render() {
    return (
      <div className="form-container-wrapper">
        <Form input={this.state} handleClick={this.props.addData} handleChange={this.handleChange} clearInputs={this.clearInputs} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators)(FormContainer);
