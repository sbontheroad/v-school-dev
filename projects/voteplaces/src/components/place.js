import React from "react";

import { Link } from "react-router-dom";

class Place extends React.Component {
  render () {
    return (
      <div className="place-wrapper">
        <Link to="/addPlace"><button className="add-place-button button">ADD BUTTON</button></Link>
        <img className="output-image" src={this.props.place.image} alt={this.props.place.name}></img>
        <h2>{this.props.place.name}</h2>
        <button className="up-button button" onClick={() => {this.props.handleUp(this.props.place._id)}}>love it</button>
        <h2 className="count">{(this.props.place.voteUp) - (this.props.place.voteDown)}</h2>
        <button className="down-button button" onClick={() => {this.props.handleDown(this.props.place._id)}}>this sucks</button>
      </div>
    )
  }
}

export default Place;
