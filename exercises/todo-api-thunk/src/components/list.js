import React from "react";

import ItemContainer from "../containers/item-container.js";

class List extends React.Component {
  genItems() {
    return this.props.items.map((item, index) => {
      return <ItemContainer handleUpdate={this.props.handleUpdate} handleRemove={this.props.handleRemove} key={item.title + index} item={item} />
    });
  }
  render() {
    return (
      <div className="list-wrapper">
        {this.genItems()}
      </div>
    )
  }
}

export default List;
