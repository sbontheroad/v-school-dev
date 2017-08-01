import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="product-wrapper">
        <div className="product">
          <img className="product-image product" src={this.props.product.image} alt={this.props.product.name}></img>
          <input className="product-edit" value={this.props.input.image} style={{display: this.props.input.edit ? "none":"inherit"}} onChange={(event) => {this.props.handleUpdate("image", event)}} />
          <h3 className="product-title product" style={{display: this.props.input.edit ? "inherit":"none"}}>{this.props.product.title}</h3>
          <input className="product-edit" value={this.props.input.title} style={{display: this.props.input.edit ? "none":"inherit"}} onChange={(event) => {this.props.handleUpdate("title", event)}} />
          <p className="product-desc product" style={{display: this.props.input.edit ? "inherit":"none"}}>{this.props.product.desc}</p>
          <input className="product-edit" value={this.props.input.desc} style={{display: this.props.input.edit ? "none":"inherit"}} onChange={(event) => {this.props.handleUpdate("desc", event)}} />
          <p className="product-price product" style={{display: this.props.input.edit ? "inherit":"none"}}>{this.props.product.price}</p>
          <input className="product-edit" value={this.props.input.price} style={{display: this.props.input.edit ? "none":"inherit"}} onChange={(event) => {this.props.handleUpdate("price", event)}} />

          <button className="remove-product button" style={{display: this.props.input.edit ? "inherit":"none"}} onClick={() => {this.props.handleRemove(this.props.product.id); this.props.toggleEdit();}}>remove</button>
          <button className="button edit-product" style={{display: this.props.input.edit ? "inherit":"none"}} onClick={() => {this.props.toggleEdit()}}>edit</button>
          <button className="button save-product" style={{display: this.props.input.edit ? "none":"inherit"}} onClick={() => {this.props.handleEdit(this.props.product.id, this.props.input); this.props.toggleEdit();}}>save</button>
        </div>
      </div>
    )
  }
}

export default Product;
