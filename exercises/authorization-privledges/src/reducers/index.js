let defaultState = {
  events: [],
  guests: [],
  userQue: [],
  username: "",
  password: "",
  token: ""
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === "SET_EVENTS"){
    return {
      ...state,
      events: action.data
    }
  } else if (action.type === "SET_GUESTS") {
    return {
      ...state,
      guests: action.data
    }
  } else if (action.type === "SET_TOKEN") {
    // console.log(action.token);
    return {
      ...state,
      token: action.token
    }
  }  else if (action.type === "SET_PRIV") {
    return {
      ...state,
      priv: action.priv
    }
  } else if (action.type === "SET_USER_QUE") {
    // console.log(action.data);
    return {
      ...state,
      userQue: action.data
    }
  } else {
      return {
        ...state
    }
  }
}

export default mainReducer;
