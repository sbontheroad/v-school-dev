//http://api.icndb.com/jokes/random

import axios from "axios";

export function getJoke() {
  return (dispatch) => {
    return axios.get(`http://api.icndb.com/jokes/random`).then((response) => {
        console.log(response.data.value.joke);
      dispatch(loadJoke(response.data.value.joke));
    })
    .catch((err) => {
      throw err;
    });
  }
}

function loadJoke(joke) {
  return {
    type: "CHUCK_NORRIS_JOKE",
    joke
  }
}
