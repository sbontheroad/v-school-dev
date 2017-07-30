import React from "react";

class ProductForm extends React.Component {
  render() {
    return (
      <div className="product-form-wrapper">
        <input className="input" placeholder="enter image url" type="text" value={this.props.input.image} onChange={(event) => {this.props.handleChange("image", event)}}/>
        <input className="input" placeholder="enter title" type="text" value={this.props.input.title} onChange={(event) => {this.props.handleChange("title", event)}} />
        <input className="input" placeholder="enter description" type="text" value={this.props.input.desc} onChange={(event) => {this.props.handleChange("desc", event)}} />
        <input className="input" placeholder="enter price" type="text" value={this.props.input.price} onChange={(event) => {this.props.handleChange("price", event)}} />
        <button className="button product-form-button" onClick={() => {this.props.handleClick(this.props.input)}}>add product</button>
      </div>
    )
  }
}

export default ProductForm;
