import axios from "axios";

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
