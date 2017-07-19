import React from "react";

class Output extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-md-4 post-col">
        <div className="output" style={{backgroundImage: `url(${this.props.item.url})`}}>
          <i onClick={() => {this.props.handleRemove(this.props.index)}} className="fa fa-window-close close" aria-hidden="true"></i>
          <div className="title">{this.props.item.title}</div>
          <div className="desc">{this.props.item.desc}</div>
        </div>
        {/* <div>
          <input placeholder="edit title" value={this.props.inputs.title} onChange={(event) => {this.props.handleInput("title", this.props.index, event)}}></input>
          <input placeholder="change description" value={this.props.inputs.desc} onChange={(event) => {this.props.handleInput("desc", this.props.index, event)}}></input>
          <input placeholder="change image" value={this.props.inputs.url} onChange={(event) => {this.props.handleInput("url", this.props.index, event)}}></input>
          <button>save</button>
        </div> */}
      </div>
    )
  }
}

export default Output;
