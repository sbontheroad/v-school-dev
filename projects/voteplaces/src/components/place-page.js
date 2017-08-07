import React from "react";

import MapContainer from "../map-api/map-container.js";

class PlacePage extends React.Component {
  genComments() {
    return this.props.placePage.comments.map((item, i) => {
      return (<p key={item + i}>{item}</p>)
    });
  }
  render() {
    return (
      <div className="place-page-wrapper">
        <img className="place-page-image" src={this.props.placePage.image} alt={this.props.placePage.name}></img>
        <h1>{this.props.placePage.name}</h1>
        <h2>{this.props.placePage.location}</h2>
        <p>{this.props.placePage.description}</p>
        <button className="up-button button" onClick={() => {this.props.handleUp(this.props.placePage._id)}}>love it</button>
        <h2 className="count">{(this.props.placePage.voteUp) - (this.props.placePage.voteDown)}</h2>
        <button className="down-button button" onClick={() => {this.props.handleDown(this.props.placePage._id)}}>hate it</button>
        <div className="comment-area">
          <textarea value={this.props.input.comment} onChange={(event) => {this.props.handleComment(event)}}></textarea>
          <button onClick={() => {this.props.addComment(this.props.placePage._id, this.props.input.comment); this.props.clearInput();}}>submit</button>
        </div>
        <div className="google-map">
          <MapContainer />
        </div>
        <div>
          {this.genComments()}
        </div>
      </div>
    )
  }
}

export default PlacePage;
