import React from "react";
import autoBind from "react-autobind";

import Item from "../components/item.js";

class ItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.item,
      edit: false
    };
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  toggleEdit() {
    this.setState ({
      edit: !this.state.edit
    });
  }
  render() {
    return (
      <div className="item-container-wrapper">
        <Item toggleEdit={this.toggleEdit} handleRemove={this.props.handleRemove} handleUpdate={this.props.handleUpdate} handleChange={this.handleChange} input={this.state} item={this.props.item} />
      </div>
    )
  }
}

export default ItemContainer;
