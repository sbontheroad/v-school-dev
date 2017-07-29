//DATA FROM REDUX FOR EACH ITEM IN THE ARRAY MAP

import React from "react";

import HitContainer from "../containers/hit-container.js";

class HitList extends React.Component {
  genHits() {
    console.log("genhits");
    return this.props.hits.map((item, index) => {
      return <HitContainer handleEdit={this.props.handleEdit} handleRemove={this.props.handleRemove} key={index + item.name} hit={item} />
    });
  }
  render() {
    return (
      <div className="hit-list-wrapper">
        {this.genHits()}
      </div>
    )
  }
}

export default HitList;
