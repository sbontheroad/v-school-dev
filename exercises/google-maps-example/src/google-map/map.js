import React from "react";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = withGoogleMap((props) => {
  return (
    <GoogleMap defaultZoom={2} defaultCenter={{lat: 78.567, lng: -76.549}}>

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
