let defaultState = {
  lat: 40.7608,
  lng: -111.8910,
  marker: []
};

const mainReducer = (state = defaultState, action) => {
  return {
    ...state
  }
}

export default mainReducer;
