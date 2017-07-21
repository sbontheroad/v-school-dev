import React from "react";

import List from "../components/list.js";

class ListContainer extends React.Component {
  render() {
    return (
      <div className="list-container-wrapper">
        <List />
      </div>
    )
  }
}

export default ListContainer;
