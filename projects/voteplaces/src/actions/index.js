let axios = require('axios');

export function loadData() {

  return (dispatch) => {
    return axios.get("http://localhost:8080/votes").then((response) => {
      dispatch(setData(response.data.data));
    })
    .catch((err) => {
      return err;
    });
  }
}

export function addData(data) {
  return (dispatch) => {
    return axios.post("http://localhost:8080/votes", data).then((response) => {
      dispatch(loadData());
    })
    .catch((err) => {
      return err;
    });
  }
}

export function voteUp(id) {
  return (dispatch) => {
    return axios.put(`http://localhost:8080/votes/voteUp/${id}`).then((response) => {
      dispatch(loadData());
    })
    .catch((err) => {
      throw err;
    })
  }
}

export function voteDown(id) {
  return (dispatch) => {
    return axios.put(`http://localhost:8080/votes/voteDown/${id}`).then((response) => {
      dispatch(loadData());
    })
    .catch((err) => {
      throw err;
    });
  }
}

function setData(data) {
  return {
    type: "SET_DATA",
    data
  }
}
