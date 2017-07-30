import React from "react";

class ProductForm extends React.Component {
  render() {
    return (
      <div className="product-form-wrapper">
        <input className="input" placeholder="enter image url" type="text" value={this.props.input.image} />
        <input className="input" placeholder="enter title" type="text" value={this.props.input.title} />
        <input className="input" placeholder="enter description" type="text" value={this.props.input.desc} />
        <input className="input" placeholder="enter price" type="text" value={this.props.input.price} />
        <button className="button product-form-button">add product</button>
      </div>
    )
  }
}

export default ProductForm;
