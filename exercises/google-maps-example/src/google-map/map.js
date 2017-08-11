import React from "react";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = withGoogleMap((props) => {
  return (
    <GoogleMap defaultZoom={8} center={{lat: props.lat, lng: props.lng}} onClick={(event) => {
      if(props.selected !== null) {
        let data = {
          lng: event.latLng.lng(),
          lat: event.latLng.lat(),
          label: props.selected.label
        };
        props.handleAdd(data);
        props.handleSet(null);
      }
    }}>
      {props.markers.map((item, index) => {
        return (
          <Marker onRightClick={() => {props.handleDelete(item)}} key={item.label + index} {...item} />
        )
      })}
    </GoogleMap>
  )
});

export default Map;


// export default class Map extends React.Component {
//   render () {
//     return (
//       <div className="map">
//         "map"
//       </div>
//     )
//   }
// }
