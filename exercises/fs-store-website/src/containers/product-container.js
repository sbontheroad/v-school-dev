import React from "react";

import Product from "../components/product.js";

class ProductContainer extends React.Component {
  render() {
    return (
      <div className="product-container-wrapper">
        <Product product={this.props.product} />
      </div>
    )
  }
}

export default ProductContainer;
