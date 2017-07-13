import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="form-custom">
        <div className="image">
          <h3 className="formText">Paste image url:</h3>
          <input className="formInput form-control" placeholder="image url" value={this.props.info.url} onChange={(event) => {this.props.handleChange("url", event)}}/>
        </div>
        <div className="upperInput">
          <h3 className="formText">Input upper text:</h3>
          <input className="formInput form-control" placeholder="input text for top" value={this.props.info.topText} onChange={(event) => {this.props.handleChange("topText", event)}}/>
        </div>
        <div className="lowerInput">
          <h3 className="formText"> Input lower text:</h3>
          <input className="formInput form-control" placeholder="input text for bottom" value={this.props.info.bottomText} onChange={(event) => {this.props.handleChange("bottomText", event)}}/>
        </div>
        <div>
          <button onClick={() => {this.props.handleClick(this.props.info)}} className="btn btn-default button-custom">submit</button>
        </div>
      </div>
    )
  }
}

export default Form;
