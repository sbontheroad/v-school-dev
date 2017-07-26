import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";


import Chuck from "../components/chuck.js";

class Container extends React.Component {
  constructor() {
    super();
      this.state = {
        joke: ""
      }
    autoBind(this);
  }
  render() {
    return (
      <div className="container-wrapper">
        <Chuck joke={this.props.joke} handleClick={this.props.getJoke}/>
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
