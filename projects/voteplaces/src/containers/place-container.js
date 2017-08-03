import React from "react";

//router
import { Link } from "react-router-dom";

import Place from "../components/place.js";

class PlaceContainer extends React.Component {
  render () {
    return (
      <div className="place-container-wrapper">
        <Link to=`/${this.props.place._id}`><Place place={this.props.place} handleUp={this.props.handleUp} handleDown={this.props.handleDown} /></Link>
      </div>
    )
  }
}

export default PlaceContainer;
