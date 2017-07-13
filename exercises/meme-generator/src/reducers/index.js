let defaultState = {
  topText: "",
  bottomText: "",
  url: ""
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === "MAKE_MEME") {
    console.log("somebody made a meme", action.meme);
    return {
      ...state,
      topText: action.meme.topText,
      bottomText: action.meme.bottomText,
      url: action.meme.url
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
