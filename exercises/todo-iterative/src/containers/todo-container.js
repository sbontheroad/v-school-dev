import React from "react";
import autoBind from "react-autobind";

import TodoList from "../components/todo-list.js";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ["buy milk", "second", "third"],
      inputValue: ""
    }
    autoBind(this);
  }
  click() {
    this.setState({
      ...this.state,
      items: [...this.state.items, this.state.inputValue],
      inputValue: ""
    });
  }
  updateValue(event) {
    this.setState({
      ...this.state,
      inputValue: event.target.value
    });
  }
  remove(index) {
    let items = [...this.state.items]
    items.splice(index, 1);
    this.setState({
      ...this.state,
      items: items
    });
  }
  keyPress(event) {
    if(event.key === "Enter") {
      this.click();
    }
  }
  render() {
    return (
      <div>
        <input onKeyPress={this.keyPress} value={this.state.inputValue} onChange={(event) => {this.updateValue(event)}}/>
        <button onClick={() => {
          this.click();
        }}>Add</button>
        <TodoList items={this.state.items} handleRemove={this.remove} />
      </div>
    )
  }
}

export default TodoContainer;
