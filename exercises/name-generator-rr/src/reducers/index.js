let defaultState = {
  randomName: ""
}

let randomName = (names) => {
    let num = names.length;
    num = Math.floor(Math.random() * num);
    return names[num];
  }

const mainReducer = (state = defaultState, action) => {
  if (action.type === "GEN_NAME") {
    // console.log(randomName(action.names));
    // console.log(action.names);
    return {
      ...state,
      randomName: randomName(action.names)
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
