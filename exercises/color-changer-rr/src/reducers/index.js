let defaultState = {
  color: "blue",
  name: ""
}

const mainReducer = (state = defaultState, action) => {
  if (action.type === "COLOR") {
    if(action.color === "#") {
      return {
        ...state,
        color: "#fa417a"
      }
    } else {
      console.log(action.color);
      return {
        ...state,
        color: action.color,
        name: action.name
      }
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;

// [...state.color, action.backgroundColor]
