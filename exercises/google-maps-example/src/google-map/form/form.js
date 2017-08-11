import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="Label" onChange={(event) => {this.props.handleChange("label", event)}} value={this.props.input.label} />
        <input placeholder="Latitude" type="Number" onChange={(event) => {this.props.handleChange("lat", event)}} value={this.props.input.lat} />
        <input placeholder="Longitude" type="Number" onChange={(event) => {this.props.handleChange("lng", event)}} value={this.props.input.lng} />
        <input placeholder="Address" type="text" onChange={(event) => {this.props.handleChange("address", event)}} value={this.props.input.address} />
        <button onClick={() => {this.props.handleClick(this.props.input)}}>submit</button>
      </div>
    )
  }
}

export default Form;
