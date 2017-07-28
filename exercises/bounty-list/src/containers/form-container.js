import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/"

import Form from "../components/form.js";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: "",
      price: "",
      wanted: ""
    }
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }
  render() {
    return (
      <div className="bounty-list-container-wrapper">
        <Form input={this.state} handleChange={this.handleChange} handleClick={this.props.addData}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default  connect(mapStateToProps, mapDispatchToProps) (FormContainer);
