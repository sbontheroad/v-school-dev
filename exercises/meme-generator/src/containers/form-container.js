import React from "react";
import autoBind from "react-autobind";

//get the thing to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreators' to bind the 'this' to the store
import { bindActionCreators } from "redux";

//import components
import Form from "../components/form.js";

//get all actions and put them in an object called actionCreators
import * as actionCreators from "../actions/"

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      url: ""
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
        <Form handleClick={this.props.makeMeme} handleChange={this.handleChange} info={this.state} />
      </div>
    )
  }
}

//tell redux how to connect the state to component via props
const mapStateToProps = (state) => {
  return state;
}

//tell redux how to turn actions inot functions that can be called in react via props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
