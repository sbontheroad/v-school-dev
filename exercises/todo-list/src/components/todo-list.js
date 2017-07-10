import React from "react";

//import components
import TodoItem from "./todo-item.js";

class TodoList extends React.Component {
  genTodoItems() {
    //return array of to do items
    return this.props.items.map((item, index) => {
      return (<TodoItem onClick={() => {this.props.handleRemove(this.props.index)}} index={index} text={item} key={item + index} />);
    })
  }
  render() {
    return(
      <div>
        <ul className="todoList">
          {this.genTodoItems()}
        </ul>
      </div>
    )
  }
}

export default TodoList;
