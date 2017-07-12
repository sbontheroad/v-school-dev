import React from "react";
import autoBind from "react-autobind";

//import components
import NameBadge from "../components/name-badge.js";

class BadgeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "sally",
      lastName: "bob",
      input: {}
    };
    autoBind(this);
  }
  handleInput(key, event) {
    let input = {
      ...this.state.input,
    };
    input[key] = event.target.value
    this.setState({
      ...this.state,
      input: input
    });
  }
  handleSubmit() {
    this.setState ({
      ...this.state,
      firstName: this.state.input.firstName,
      lastName: this.state.input.lastName,
      input: {
        firstName: "",
        lastName: ""
      }
    });
  }
  render() {
    return (
      <div>
        <NameBadge handleSubmit={this.handleSubmit} handleInput={this.handleInput} input={this.state.input} firstName={this.state.firstName} lastName={this.state.lastName} />
      </div>
    )
  }
}

export default BadgeContainer;
