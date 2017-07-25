let defaultState = {
  yodaspeak: "test"
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === "YODA_SPEAK") {
    return {
      ...state,
      yodaspeak: action.yodaspeak
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
