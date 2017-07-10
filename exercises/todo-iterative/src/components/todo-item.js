import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.handleRemove(this.props.index)
        }}>X</button>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default TodoItem;
