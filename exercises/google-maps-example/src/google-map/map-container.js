import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";

import Map from "./map.js";

export default class MapContainer extends React.Component {
  render () {
    return (
      <Map containerElement={<div style={{height: "400px", width: "80vw"}}></div>} mapElement={<div style={{height: "100%"}}></div>}/>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

connect(mapStateToProps, null)(MapContainer);
