import React from "react";

class Form extends React.Component {
  genNames() {
    this.nameListItems = this.props.names.map((item, index) => {
      return (
        <li onClick={() => {this.props.handleRemove(index);}} key={item + index}>{item}</li>
      )
    });
  }

  render() {
    this.genNames();
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7 col-sm-offset-4 col-md-offset-4">
              {this.props.brand}
              <h1>sign up to learn more</h1>
              <div className="inputData">
                <input value={this.props.nameValue} onChange={this.props.handleInput}/>
                <button className="button" onClick={() => {
                  this.props.handleClick();
                }}>enter</button>
                <ul>
                  {this.nameListItems}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;
