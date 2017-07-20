let defaultState = {
  color: "blue"
}

const mainReducer = ( state = defaultState, action) => {
  if (action.type === "COLOR") {
    return {
      ...state,
      color: action.color
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;

// [...state.color, action.backgroundColor]
