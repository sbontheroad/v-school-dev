import React from "react";
import autoBind from "react-autobind";

import ProductForm from "../components/product-form.js";

class ProductFormContainer extends React.Component {
  constructor() {
    super();
      this.state = {
        image: "test",
        title: "test",
        desc: "test",
        price: 30
    }
    autoBind(this);
  }
  render() {
    return (
      <div className="product-form-wrapper">
        <ProductForm input={this.state} />
      </div>
    )
  }
}

export default ProductFormContainer;
