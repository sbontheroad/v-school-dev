import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

import YodaSpeak from "../components/yoda-speak.js";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
    autoBind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div className="container-wrapper">
        <YodaSpeak input={this.state.input} yodaspeak={this.props.yodaspeak} handleChange={this.handleChange} handleClick={this.props.convertText} />
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

export default connect(mapStateToProps, mapDispatchToProps) (Container);
