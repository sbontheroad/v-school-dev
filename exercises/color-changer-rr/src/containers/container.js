import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Color from "../components/color.js";

import * as actionCreators from "../actions/";

class Container extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     backgroundColor: "blue"
  //   }
  //   autoBind(this);
  // }
  // handleClick() {
  //   this.props.color(this.state)
  // }
  // handleChange(event) {
  //   this.setState({
  //
  //   });
  // }
  render() {
    return (
      <div className="container-wrapper">
        <Color handleClick={this.props.changeColor} color={this.props.color} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Container);

//color={this.state}  handleChange={this.handleChange}
