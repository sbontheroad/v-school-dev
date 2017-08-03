let defaultState = {
    places: [],
    placePage: {}
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === "SET_DATA") {
    return {
    ...state,
    places: action.data
  }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
