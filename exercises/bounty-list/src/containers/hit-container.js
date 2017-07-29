//RENDER OUT Component AND HANDLE LOCAL STATE FOR INPUTS

import React from "react";
import autoBind from "react-autobind";

import Hit from "../components/hit.js";

class HitContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ...this.props.hit,
      edit: true
    }
    autoBind(this);
  }
  handleUpdate(key, event) {
    console.log(key);
    this.setState ({
      [key]: event.target.value
    })
  }
  toggleEdit() {
    this.setState ({
      edit: !this.state.edit
    });
  }
  render() {
    return (
      <div className="hit-container-wrapper">
        <Hit toggleEdit={this.toggleEdit} handleEdit={this.props.handleEdit} handleUpdate={this.handleUpdate} handleRemove={this.props.handleRemove} hit={this.props.hit} input={this.state}/>
      </div>
    )
  }
}

export default HitContainer;
