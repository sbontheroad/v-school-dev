import React from "react";

import GoogleApiComponent from "./GoogleApiComponent.js";
import Map from "./map.js";




export class Container extends React.Component {
  render() {
    const style = {
      width: '500px',
      height: '500px',
      border: '1px solid black'
    }
    console.log(this.props.google);
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}


export default GoogleApiComponent({
  apiKey: 'AIzaSyCmXjU9F_wNJnBlPI0rOeStQDM_pRNiE4s'
}) (Container)
