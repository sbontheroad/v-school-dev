import React from "react";

import { Link } from "react-router-dom";

class Place extends React.Component {
  render () {
    return (
      <div className="place-wrapper place-col col-md-3 col-sm-6">
        <div className="trans-overlay">
          <div className="image-wrapper">
            <Link to={`/place/${this.props.place._id}`}><img className="output-image" src={this.props.place.image} alt={this.props.place.name}></img></Link>
          </div>
          <h2 className="name-overlay">{this.props.place.name}</h2>
        </div>

        {/* <button onClick={() => {this.props.handleDelete(this.props.place._id)}}>x</button> */}
        <div className="vote-molecule">
          <button className="up-button button" onClick={() => {this.props.handleUp(this.props.place._id)}}>love it</button>
          <h2 className="count inline">{(this.props.place.voteUp) - (this.props.place.voteDown)}</h2>
          <button className="down-button button" onClick={() => {this.props.handleDown(this.props.place._id)}}>hate it</button>
        </div>
      </div>
    )
  }
}

export default Place;
