//connect to redux and pass data down
import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

import ProductContainer from "../containers/product-container.js";

class ProductList extends React.Component {
  genProduct() {
    return this.props.products.map((item, index) => {
      return <ProductContainer key={index + item.name} product={item} />
    })
  }
  render() {
    return (
      <div className="product-list-wrapper">
        {this.genProduct()}
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

export default  connect(mapStateToProps, mapDispatchToProps) (ProductList);
