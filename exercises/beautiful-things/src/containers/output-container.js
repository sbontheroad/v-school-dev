import React from "react";
import autoBind from "react-autobind";

import Output from "../components/output.js";

class OutputContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      desc: "",
      url: ""
    };
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <Output input={this.state} handleChange={this.handleChange} handleInput={this.props.handleInput} inputs={this.props.inputs} handleSave={this.props.handleSave} handleRemove={this.props.handleRemove} item={this.props.item} index={this.props.index} key={this.props.title + this.props.index} />
    )
  }
}

export default OutputContainer;
