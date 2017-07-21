import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="item-wrapper">
        <label htmlFor="completed">completed</label>
        <input id="completed" className="form-input-checkbox" type="checkbox" label="completed" />
      </div>
    )
  }
}


export default Item;
