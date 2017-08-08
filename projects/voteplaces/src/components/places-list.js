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
        <center>
          <div className="full-page-layout">

            <div className="home-page-description">
              <div className="home-page-description-child">
                <h1>Dream. Discover. Share.</h1>
                <p>Explore amazing places here. Love your favorites.  The best will rise to the top.</p>
                <Link to="/addPlace"><button className="add-place-button button">add place</button></Link>
              </div>
            </div>
            {/* row places-row */}
            <div className="place-col">
                {this.genPlaces()}

            </div>
          </div>
        </center>
      </div>
    )
  }
}

export default PlacesList;
