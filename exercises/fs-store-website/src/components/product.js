import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="product-wrapper">
        <div className="product">
          <img className="product-image product" src={this.props.product.image} alt={this.props.product.name}></img>
          <input className="product-edit" value={this.props.input.image} onChange={(event) => {this.props.handleUpdate("image", event)}} />
          <h3 className="product-title product">{this.props.product.title}</h3>
          <input className="product-edit" value={this.props.input.title} onChange={(event) => {this.props.handleUpdate("title", event)}} />
          <p className="product-desc product">{this.props.product.desc}</p>
          <input className="product-edit" value={this.props.input.desc} onChange={(event) => {this.props.handleUpdate("desc", event)}} />
          <p className="product-price product">{this.props.product.price}</p>
          <input className="product-edit" value={this.props.input.price} onChange={(event) => {this.props.handleUpdate("price", event)}} />

          <button className="remove-product button" onClick={() => {this.props.handleRemove(this.props.product.id)}}>remove</button>
          <button className="button edit-product">edit</button>
          <button className="button save-product" onClick={() => {this.props.handleEdit(this.props.product.id, this.props.input)}}>save</button>
        </div>
      </div>
    )
  }
}

export default Product;
