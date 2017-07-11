import React from "react";
import autoBind from "react-autobind";

//import components
import Header from "../components/header.js";
import TodoList from "../components/todo-list.js";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          name: "do a function",
          value: ""
        },
        {
          name: "learn linux",
          value: ""
        }
      ],
      inputValue: ""
    }
    autoBind(this);
  }
  click() {
    this.setState({
      ...this.state,
      items: [
        ...this.state.items,
        {
          name: this.state.inputValue,
          inputValue: ""
        }
      ],
      inputValue: ""
    });
  }
  keyPress(event) {
    if(event.key === "Enter") {
      this.setState({
        ...this.state,
        items: [...this.state.items, {name: this.state.inputValue, inputValue: ""}],
        inputValue: ""
      });
      event.target.value = ""
    }
  }
  updateValue(event) {
    this.setState ({
      ...this.state,
      inputValue: event.target.value
    });
  }
  updateItemValue(index, event) {
    let items = [...this.state.items];
    items[index].inputValue = event.target.value;
    this.setState({
      ...this.state,
      items: items
    });
  }
  save(index) {
    let items = [...this.state.items];
    items[index].name = items[index].inputValue;
    items[index].inputValue = "";
    this.setState({
      ...this.state,
      items: items
    });
  }
  updateNameOfItem(index, event) {
    let items = [...this.state.items];
    items[index].inputValue = event.target.value;
    this.setState({
      ...this.state,
      items: items
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
        <TodoList handleSave={this.save} handleUpdate={this.updateItemValue} handleRemove={this.remove} items={this.state.items}/>
      </div>
    )
  }
}

export default TodoContainer;
