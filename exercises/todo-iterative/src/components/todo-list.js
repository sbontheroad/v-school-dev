import React from "react";

import TodoItem from "./todo-item.js";

class TodoList extends React.Component {
  genToDoItems() {
    //return array of to do items
    return this.props.items.map((item, index) => {
    return (
        <TodoItem index={index} handleRemove={this.props.handleRemove} text={item}  key={item + index}/>
      )
    });
  }
  render() {
    return (
      <div>
        {this.genToDoItems()}
      </div>
    )
  }
}

export default TodoList;
