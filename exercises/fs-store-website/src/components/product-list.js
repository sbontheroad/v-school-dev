import React from "react";

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

export default ProductList;
