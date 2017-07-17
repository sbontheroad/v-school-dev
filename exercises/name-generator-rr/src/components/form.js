import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <input className="form-control input" placeholder="type in a name" value={this.props.names.name1} onChange={(event) => {this.props.handleChange("name1", event)}} />
          </div>
          <div className="col-md-4">
            <input className="form-control input" placeholder="type in a name" value={this.props.names.name2} onChange={(event) => {this.props.handleChange("name2", event)}}/>
          </div>
          <div className="col-md-4">
            <input className="form-control input" placeholder="type in a name" value={this.props.names.name3} onChange={(event) => {this.props.handleChange("name3", event)}}/>
          </div>
        </div>
        <div className="row button-row text-center">
          <button className="btn btn-default button-custom" onClick={() => {this.props.handleClick([this.props.names.name1, this.props.names.name2, this.props.names.name3]); this.props.clearInputs()}}>submit</button>
        </div>
      </div>
    )
  }
}

export default Form;
