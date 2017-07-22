import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="item-wrapper container">
        <div className="item-posts">
          <button onClick={() => {this.props.handleRemove(this.props.item._id)}}className="remove">X</button>
          <h3 style={{display: this.props.input.edit ? "none":"inherit"}}>{this.props.item.title}</h3>
          <input className="form-control edit-input" placeholder="change title here" style={{display: this.props.input.edit ? "inherit" : "none"}} onChange={(event) => {this.props.handleChange("title", event)}} value={this.props.input.title} />
          <p style={{display: this.props.input.edit ? "none":"inherit"}}>{this.props.item.description}</p>
          <input className="form-control edit-input" placeholder="change description here" style={{display: this.props.input.edit ? "inherit" : "none"}} onChange={(event) => {this.props.handleChange("description", event)}} value={this.props.input.description} />
          <p style={{display: this.props.input.edit ? "none":"inherit"}}>$ {this.props.item.price}</p>
          <input className="form-control edit-input" type="number" placeholder="change price here" style={{display: this.props.input.edit ? "inherit" : "none"}} onChange={(event) => {this.props.handleChange("price", event)}} value={this.props.input.price} />
          <button onClick={() => {this.props.handleUpdate(this.props.item._id, this.props.input); this.props.toggleEdit();}} style={{display: this.props.input.edit ? "inherit" : "none"}} className="button-custom edit-button">Save</button>
          <button onClick={() => {this.props.toggleEdit();}} className="button-custom edit-button">Edit</button>
      </div>
      </div>
    )
  }
}


export default Item;
