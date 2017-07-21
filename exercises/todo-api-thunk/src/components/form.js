import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="form-wrapper container">
        <div className="row form-row">
          <div className="col-xs-12 col-md-3">
            <input className="form-control form-input" placeholder="title" />
          </div>
          <div className="col-xs-12 col-md-6">
            <input className="form-control form-input" placeholder="description" />
          </div>
          <div className="col-xs-12 col-md-1">
            <input className="form-control form-input" placeholder="price" />
          </div>
          <div className="col-xs-12 col-md-2">
            <button className="button-custom">add</button>
          </div>
        </div>
      </div>

    )
  }
}
export default Form;
