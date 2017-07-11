import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-default button-custom" onClick={() => {this.props.handleRemove(this.props.index)}}>remove</button>
        <p>{this.props.text}</p>
        <input onChange={(event) => {this.props.handleUpdate(this.props.index, event)}} value={this.props.nameValue} />
        <button className="btn btn-default button-custom" onClick={() => {this.props.handleSave(this.props.index)}}>Save</button>
      </div>
    )
  }
}

export default TodoItem;
