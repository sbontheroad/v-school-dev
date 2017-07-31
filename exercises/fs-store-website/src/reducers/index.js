let defaultState = {
  products: []
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === "SET_DATA") {
    return {
      ...state,
      products: action.data
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
