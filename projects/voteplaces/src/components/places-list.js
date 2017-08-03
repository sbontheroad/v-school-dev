import React from "react";

import PlaceContainer from "../containers/place-container.js";

class PlacesList extends React.Component {
  genPlaces() {
    return this.props.places.map((item, index) => {
      return <PlaceContainer key={index + item._id} place={item} handleUp={this.props.handleUp} handleDown={this.props.handleDown} />
    })
  }
  render () {
    return (
      <div className="places-list-wrapper">
        {this.genPlaces()}
      </div>
    )
  }
}

export default PlacesList;
