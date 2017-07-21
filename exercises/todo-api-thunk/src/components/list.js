import React from "react";

import ItemContainer from "../containers/item-container.js";

class List extends React.Component {
  render() {
    return (
      <div className="list-wrapper">
        <ItemContainer />
      </div>
    )
  }
}


export default List;
