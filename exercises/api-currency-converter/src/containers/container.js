import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";


import CurrencyConverter from "../components/currency-converter.js";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: "",
      amount: ""
    }
    autoBind(this);
  }
  handleChange(event) {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div className="container-wrapper">
        <CurrencyConverter handleChange={this.handleChange} currency={this.state.currency} amount={this.state.amount} newAmount={this.props.amount} handleClick={this.props.getInfo} />
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
