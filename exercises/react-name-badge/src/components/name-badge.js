import React from "react";

class NameBadge extends React.Component {
  render() {
    return (
      <div>
        <h1>Create Your Name Badge</h1>
        <input onChange={(event) => {this.props.handleInput("firstName", event)}} value={this.props.input.firstName} placeholder="first name"></input>
        <input onChange={(event) => {this.props.handleInput("lastName", event)}} value={this.props.input.lastName} placeholder="last name"></input>
        <button onClick={(event) => {this.props.handleSubmit()}}>submit</button>

        <p>{this.props.firstName}</p>
        <p>{this.props.lastName}</p>
      </div>
    )
  }
}

export default NameBadge;
