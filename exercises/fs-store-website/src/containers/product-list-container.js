import React from "react";

import ProductList from "../components/product-list.js";

class ProductListContainer extends React.Component {
  render() {
    return (
      <div className="product-list-container-wrapper">
        <ProductList products={this.props.products} />
      </div>
    )
  }
}

export default ProductListContainer;
