let defaultState = {
    places: [],
    placePage: {
      comments: []
    }
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === "SET_DATA") {
    return {
    ...state,
    places: action.data
  }
} else if (action.type === "INDIV_DATA") {
  return {
    ...state,
    placePage: action.data
  }
} else {
    return {
      ...state
    }
  }
}

export default mainReducer;
