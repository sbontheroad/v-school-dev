import React from "react";

//router
import { Link } from "react-router-dom";

import PlaceContainer from "../containers/place-container.js";

class PlacesList extends React.Component {
  genPlaces() {
    return this.props.places.sort((a, b) => {return (b.voteUp - b.voteDown) - (a.voteUp - a.voteDown)}).map((item, index) => {
      return <PlaceContainer key={index + item._id} place={item} handleDelete={this.props.handleDelete} handleUp={this.props.handleUp} handleDown={this.props.handleDown} />
    })
  }
  render () {
    return (
      <div className="places-list-wrapper">
        <div className="home-page-description">
          <h1>Dream. Discover. Share.</h1>
          <p>Explore amazing things to see here. Love it or hate it.  The best will rise to the top.</p>
          <Link to="/addPlace"><button className="add-place-button button">add place</button></Link>
        </div>
        <center>
          <div className="container-fluid">
            <div className="row places-row">
                {this.genPlaces()}
            </div>
          </div>
        </center>
      </div>
    )
  }
}

export default PlacesList;
