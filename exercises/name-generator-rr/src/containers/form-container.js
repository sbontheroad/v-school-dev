import React from "react";

//import components
import Form from "../components/form.js";

class FormContainer extends React.Component {

  // onClick(event) {
  //   let randomName = (arr) => {
  //     let num = arr.length;
  //     num = Math.floor(Math.random() * num);
  //     console.log(arr[num]);
  //
  //   }
  // }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <div>
        <Form handleChange={this.handleChange} names={this.state} />
      </div>
    )
  }
}

export default FormContainer;
