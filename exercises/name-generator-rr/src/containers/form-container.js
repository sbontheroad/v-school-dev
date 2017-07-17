import React from "react";
import autoBind from "react-autobind";

//get the thing to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreators' to find the 'this' to the store
import { bindActionCreators } from "redux";

//import components
import Form from "../components/form.js";

//get all actions and put them in an object called actionCreators
import * as actionCreators from "../actions/";

class FormContainer extends React.Component {
  constructor () {
    super();
    this.state ={
      randomName: ""
    };
    autoBind(this)
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
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
        <Form clearInputs={this.clearInputs} handleClick={this.props.genName} handleChange={this.handleChange} names={this.state} />
      </div>
    )
  }
}

//tell redux how to connect the state to the component via props
const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
