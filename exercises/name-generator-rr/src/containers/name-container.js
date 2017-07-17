import React from "react";

//get the thing to connect react to the store
import { connect } from "react-redux";

//get bindActionCreators to bind the 'this' to the store
import { bindActionCreators } from "redux";

//import components
import Name from "../components/name.js";

//get all actions and put them in an object call actionCreators
import * as actionCreators from "../actions/";

class NameContainer extends React.Component {
  render() {
    return (
      <div>
        <Name randomName={this.props.randomName} />
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


export default connect(mapStateToProps, mapDispatchToProps)(NameContainer);
