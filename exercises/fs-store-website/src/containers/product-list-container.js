import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";

import ProductList from "../components/product-list.js";

class ProductListContainer extends React.Component {
  componentWillMount() {
    this.props.loadData();
  }
  render() {
    // console.log(this.props.products.length);
    return (
      <div className="product-list-container-wrapper">
        <ProductList handleEdit={this.props.editData} handleRemove={this.props.deleteData} products={this.props.products} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
