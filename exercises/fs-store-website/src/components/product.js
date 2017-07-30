import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="product-wrapper">
        <div className="product">
          <img className="product-image product" src={this.props.product.image} alt={this.props.product.name}></img>
          <h3 className="product-title product">{this.props.product.title}</h3>
          <p className="product-desc product">{this.props.product.desc}</p>
          <p className="product-price product">{this.props.product.price}</p>
        </div>
      </div>
    )
  }
}

export default Product;
