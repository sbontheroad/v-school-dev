let defaultState = {
  joke: ""
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === "CHUCK_NORRIS_JOKE") {
    return {
      ...this.state,
      joke: action.joke
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
