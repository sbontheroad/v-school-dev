import React from "react";

import Item from "../components/item.js";

class ItemContainer extends React.Component {
  render() {
    return (
      <div className="item-container-wrapper">
        <Item />
      </div>
    )
  }
}

export default ItemContainer;
