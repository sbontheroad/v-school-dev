let defaultState = {
  hits: [
    {
      name: "",
      location: "",
      price: "",
      wanted: ""
    }
  ]
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === "SET_DATA") {
    return {
      ...state,
      hits: action.data
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
