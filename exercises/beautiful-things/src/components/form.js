import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="container form">
        <input className="form-control input" placeholder="add the url of an image" onChange={(event) => {this.props.handleChange("url", event)}} value={this.props.input.url}/>
        <input className="form-control input" placeholder="add a title" onChange={(event) => {this.props.handleChange("title", event)}} value={this.props.input.title}/>
        <input className="form-control input" placeholder="share something that inspires you" onChange={(event) => {this.props.handleChange("desc", event)}} value={this.props.input.desc}/>
        <div className="center-button">
          <button className="btn btn-default button-custom" onClick={() => {this.props.handleClick(); this.props.clearInputs()}}>submit</button>
        </div>
      </div>
    )
  }
}

export default Form;
