import React from "react";
import autoBind from "react-autobind";

//get the thing to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreators' to bind the 'this' to the store
import { bindActionCreators } from "redux";

import Form from "../components/form.js";

//get all actions and put them in an object called
import * as actionCreators from "../actions/";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      url: "",
      title: "",
      desc: ""
    }
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  handleClick() {
    this.props.createPost(this.state)
  }
  clearInputs() {
    for(let key in this.state) {
      this.setState({
        [key]: ""
      });
    }
  }
  render() {
    return (
      <div>
        <Form clearInputs={this.clearInputs} handleChange={this.handleChange} handleClick={this.handleClick} input={this.state} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
