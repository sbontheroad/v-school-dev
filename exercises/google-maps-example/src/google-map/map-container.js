import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as actionCreators from "../actions";


import Map from "./map.js";

class MapContainer extends React.Component {
  componentWillMount() {
    this.props.loadMarkers();
  }
  render () {
    return (
      <Map lat={this.props.lat} lng={this.props.lng} markers={this.props.markers} selected={this.props.selected} handleSet={this.props.setCurrent} handleAdd={this.props.addMarker} handleDelete={this.props.deleteMarker} containerElement={<div style={{height: "400px", width: "80vw"}}></div>} mapElement={<div style={{height: "100%"}}></div>}/>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators)(MapContainer);
