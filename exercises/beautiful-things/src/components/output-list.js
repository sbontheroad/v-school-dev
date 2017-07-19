import React from "react";

import Output from "./output.js";

class OutputList extends React.Component {
  genOutputList() {
    console.log(this.props);
    return this.props.posts.map((item, index) => {
      return <Output handleInput={this.props.handleInput} inputs={this.props.inputs} handleSave={this.props.handleSave} handleRemove={this.props.handleRemove} item={item} index={index} key={item + index} />
    })
  }
  render() {
    return (
      <div className="row">
        {this.genOutputList()}
      </div>
    )
  }
}

export default OutputList;
