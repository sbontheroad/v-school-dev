import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="form-wrapper container">
        <div className="row form-row">
          <div className="col-xs-12 col-md-3">
            <input className="form-control form-input" placeholder="title" onChange={(event) => {this.props.handleChange("title", event)}} value={this.props.input.title} />
          </div>
          <div className="col-xs-12 col-md-6">
            <input className="form-control form-input" placeholder="description" onChange={(event) => {this.props.handleChange("description", event)}} value={this.props.input.description} />
          </div>
          <div className="col-xs-12 col-md-1">
            <input className="form-control form-input" type="number" placeholder="price" onChange={(event) => {this.props.handleChange("price", event)}} value={this.props.input.price} />
          </div>
          <div className="col-xs-12 col-md-2">
            <button onClick={() => {this.props.handleAdd(this.props.input), this.props.handleUpdate(this.props.input)}} className="button-custom">add</button>
          </div>
        </div>
      </div>

    )
  }
}

{/* onClick={() => {this.props.handleClick(); this.props.clearInputs}}  */}
export default Form;
