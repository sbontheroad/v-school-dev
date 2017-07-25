let defaultState = {
  currency: "",
  amount: 0
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === "CONVERT_CURRENCY") {
    return {
      ...state,
      amount: action.newAmount
      }
    } else {
      return {
        ...state
    }
  }
}

export default mainReducer;
