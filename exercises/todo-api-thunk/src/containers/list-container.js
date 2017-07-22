import React from "react";

import List from "../components/list.js";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

class ListContainer extends React.Component {
  componentWillMount() {
    this.props.loadData();
  }
  render() {
    return (
      <div className="list-container-wrapper">
        <List handleUpdate={this.props.editData} handleRemove={this.props.removeData} items={this.props.items} />
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

export default connect(mapStateToProps, mapDispatchToProps) (ListContainer);
