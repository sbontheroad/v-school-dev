import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/"



//import components
import Counter from "../components/counter.js";

class CounterContainer extends React.Component {
  render() {
    return (
      <div>
        <Counter handleAdd={this.props.addAction} handleSub={this.props.subAction} counter={this.props.counter} />
      </div>
    )
  }
}

//handles putting our state into react
const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
