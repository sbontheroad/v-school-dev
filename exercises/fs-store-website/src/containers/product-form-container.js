import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";

import ProductForm from "../components/product-form.js";

class ProductFormContainer extends React.Component {
  constructor() {
    super();
      this.state = {
        image: "",
        title: "",
        desc: "",
        price: ""
    }
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState ({
      [key]: event.target.value
    })
  }
  clearInputs() {
    this.setState ({
      image: "",
      title: "",
      desc: "",
      price: ""
    })
  }
  render() {
    return (
      <div className="product-form-wrapper">
        <ProductForm input={this.state} clearInputs={this.clearInputs} handleClick={this.props.addData} handleChange={this.handleChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormContainer);
