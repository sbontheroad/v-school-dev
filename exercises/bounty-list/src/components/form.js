import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="bounty-wrapper">
        <input className="formInput" placeholder="enter name" type="text" onChange={(event) => {this.props.handleChange("name", event)}} value={this.props.input.name} />
        <input className="formInput" placeholder="last known location" type="text" onChange={(event) => {this.props.handleChange("location",event)}} value={this.props.input.location} />
        <input className="formInput" placeholder="price offered" type="text" onChange={(event) => {this.props.handleChange("price", event)}} value={this.props.input.price} />
        <input className="formInput" placeholder="dead or alive?" type="text" onChange={(event) => {this.props.handleChange("wanted", event)}} value={this.props.input.wanted} />
        <button className="button" onClick={() => {this.props.handleClick(this.props.input)}}>submit</button>
      </div>
    )
  }
}

export default Form;
