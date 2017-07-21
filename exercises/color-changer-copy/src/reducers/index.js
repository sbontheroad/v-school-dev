let defaultState = {
  color: "purple"
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === "COLOR") {
    return {
      ...state,
      color: action.colorKey
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
