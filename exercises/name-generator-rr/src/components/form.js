import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <input className="form-control input" placeholder="type in a name" value={this.props.names} onChange={(event) => {this.props.handleChange("names", event)}} />
          </div>
          <div className="col-md-4">
            <input className="form-control input" placeholder="type in a name" value={this.props.names} onChange={(event) => {this.props.handleChange("names", event)}}/>
          </div>
          <div className="col-md-4">
            <input className="form-control input" placeholder="type in a name" value={this.props.names} onChange={(event) => {this.props.handleChange("names", event)}}/>
          </div>
        </div>
        <div className="row button-row text-center">
          <button className="btn btn-default button-custom">submit</button>
        </div>
      </div>
    )
  }
}

export default Form;
