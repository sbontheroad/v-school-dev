import React from "react";

//import components
import TodoItem from "./todo-item.js";

class TodoList extends React.Component {
  genTodoItems() {
    //return array of to do items
    return this.props.items.map((item, index) => {
      return (<TodoItem handleSave={this.props.handleSave} handleUpdate={this.props.handleUpdate} nameValue={item.inputValue} index={index} text={item.name} key={item.name + index} handleRemove={this.props.handleRemove} />);
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
