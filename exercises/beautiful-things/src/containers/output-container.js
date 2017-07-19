import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import OutputList from "../components/output-list.js";

import * as actionCreators from "../actions/";

class OutputContainer extends React.Component {
  render() {
    return (
      <div className="container-fluid container-margin">
          <OutputList handleSave={this.props.update} handleRemove={this.props.close} posts={this.props.posts} />
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

export default connect(mapStateToProps, mapDispatchToProps)(OutputContainer);
