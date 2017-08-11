let defaultState = {
  lat: 40.7608,
  lng: -111.8910,
  markers: [],
  selected: null
};

const mainReducer = (state = defaultState, action) => {
  if(action.type === "SET_MARKERS") {
    return {
      ...state,
      markers: action.data
    }
  } else if (action.type === "SET_CURRENT") {
    console.log("called set current", action.data);
    return {
      ...state,
      selected: action.data
    }
  } else if (action.type === "SET_FOCUS") {
    return {
      ...state,
      lat: action.lat,
      lng: action.lng
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
