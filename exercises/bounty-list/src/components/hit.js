//RENDER OUT HIT

import React from "react";


class Hit extends React.Component {
  render() {
    return (
      <div className="hit-wrapper">
        <p style={{display: this.props.input.edit ? "inherit":"none"}}>{this.props.hit.name}</p>
        <input className="changeInput" style={{display: this.props.input.edit ? "none":"inherit"}} value={this.props.input.name} onChange={(event) => {this.props.handleUpdate("name", event)}}/>

        <p style={{display: this.props.input.edit ? "inherit":"none"}}>{this.props.hit.location}</p>
        <input className="changeInput" style={{display: this.props.input.edit ? "none":"inherit"}} value={this.props.input.location} onChange={(event) => {this.props.handleUpdate("location", event)}} />

        <p style={{display: this.props.input.edit ? "inherit":"none"}}>{this.props.hit.price}</p>
        <input className="changeInput" style={{display: this.props.input.edit ? "none":"inherit"}} value={this.props.input.price} onChange={(event) => {this.props.handleUpdate("price", event)}}  />

        <p style={{display: this.props.input.edit ? "inherit":"none"}}>{this.props.hit.wanted}</p>
        <input className="changeInput" style={{display: this.props.input.edit ? "none":"inherit"}} value={this.props.input.wanted} onChange={(event) => {this.props.handleUpdate("wanted", event)}}  />

        <button className="button" onClick={() => {this.props.toggleEdit()}}>Edit</button>
        <button onClick={() => {this.props.handleRemove(this.props.hit.id)}}  style={{display: this.props.input.edit ? "inherit":"none"}}>Success</button>
        <button onClick={() => {this.props.handleEdit(this.props.hit.id, this.props.input); this.props.toggleEdit();}} style={{display: this.props.input.edit ? "none":"inherit"}}>Save</button>
      </div>
    )
  }
}

export default Hit;
