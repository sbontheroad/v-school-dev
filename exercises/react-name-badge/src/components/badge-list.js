import React from "react";

//import components
import NameBadge from "../components/name-badge.js";

class BadgeList extends React.Component {
  genBadges() {
    return this.props.names.map((name) => {
      return(<NameBadge text={name} />)
    })
  }
  render() {
    return (
      <div>
        {this.genBadges}
      </div>
    )
  }
}

export default BadgeList;
