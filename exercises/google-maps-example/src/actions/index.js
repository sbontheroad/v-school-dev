//geocoding key: AIzaSyDzw5Cb7_Cz-p-cC7-8kt8Z22wiGZ06SCU
import axios from "axios";

let key = 'AIzaSyDzw5Cb7_Cz-p-cC7-8kt8Z22wiGZ06SCU';

export function getLatAndLng(label, address) {
  let formattedAddress = address.split(" ").join("+");
  return (dispatch) => {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${key}`).then((response) => {
      if(response.data.results.length > 0) {
        let geo = response.data.results[0].geometry;
        dispatch(addMarker({
          label,
          lat: geo.location.lat,
          lng: geo.location.lng
        }));
      } else {
        alert("Hi, sorry, that was an invalid address, but you look nice today.")
      }
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function loadMarkers() {
  return (dispatch) => {
    return axios.get("http://localhost:9000/map").then((response) => {
      dispatch(setMarkers(response.data.data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function addMarker(input) {
  return (dispatch) => {
    let data = {
      position: {
        lat: input.lat,
        lng: input.lng
      },
      label: input.label
    }
    return axios.post("http://localhost:9000/map", data).then((response) => {
      dispatch(loadMarkers());
      dispatch(setFocus(input.lat, input.lng));
    })
    .catch((err) => {
      throw err;
    })
  }
}

export function deleteMarker(data) {
  return (dispatch) => {
    return axios.delete(`http://localhost:9000/map/${data._id}`).then((response) => {
      dispatch(loadMarkers());
      dispatch(setCurrent(data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function setMarkers(data) {
  return {
    type: "SET_MARKERS",
    data
  }
}

export function setCurrent(data) {
  return {
    type: "SET_CURRENT",
    data
  }
}

export function setFocus(lat, lng) {
  return {
    type: "SET_FOCUS",
    lat,
    lng
  }
}
