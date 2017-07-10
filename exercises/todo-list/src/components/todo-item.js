import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default TodoItem;
