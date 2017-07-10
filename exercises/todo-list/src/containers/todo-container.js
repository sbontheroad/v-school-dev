import React from "react";
import autoBind from "react-autobind";

//import components
import Header from "../components/header.js";
import TodoList from "../components/todo-list.js";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ["do a function", "learn linux"],
      inputValue: ""
    }
    autoBind(this);
  }
  click() {

  }
  keyPress(event) {
    if(event.key === "Enter") {
      this.setState({
        ...this.state,
        items: [...this.state.items, this.state.inputValue],
        inputValue: ""
      });
    }
  }
  updateValue(event) {
    this.setState ({
      ...this.state,
      inputValue: event.target.value
    });
  }
  remove(index) {
    let items = [...this.state.items];
    items.splice(index, 1);
    this.setState({
      ...this.state,
      items: items
    });
  }
  render() {
    return (
      <div>
        <Header keyPress={this.keyPress} value={this.state.inputValue} change={(event) => {this.updateValue(event)}}/>
        <TodoList handleRemove={this.remove} items={this.state.items}/>
      </div>
    )
  }
}

export default TodoContainer;
