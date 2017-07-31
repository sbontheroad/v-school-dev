import React from "react";
import autoBind from "react-autobind";

import Product from "../components/product.js";

class ProductContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ...this.props.product,
      // edit: true
    }
    autoBind(this);
  }
  handleUpdate(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }
  render() {
    return (
      <div className="product-container-wrapper">
        <Product product={this.props.product} input={this.state} handleUpdate={this.handleUpdate} handleEdit={this.props.handleEdit} handleRemove={this.props.handleRemove} />
      </div>
    )
  }
}

export default ProductContainer;
