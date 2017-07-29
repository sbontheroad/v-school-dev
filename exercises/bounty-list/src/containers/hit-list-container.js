//CONNECT TO REDUX AND PASS DATA DOWN
import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

import HitList from "../components/hit-list.js";

class HitListContainer extends React.Component {
  componentWillMount() {
    this.props.loadData();
  }
  render() {
    return (
      <div className="hit-wrapper">
        <HitList hits={this.props.hits} handleRemove={this.props.deleteData} handleEdit={this.props.editData} />
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

export default connect(mapStateToProps, mapDispatchToProps) (HitListContainer);
