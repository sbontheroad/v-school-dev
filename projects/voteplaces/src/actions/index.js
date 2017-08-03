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

export function loadDataById(id) {
  return (dispatch) => {
    return axios.get(`http://localhost:8080/votes/${id}`).then((response) => {
      dispatch(setSingleData(response.data.data));
    })
    .catch((err) => {
      throw err;
    })
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
      dispatch(loadDataById(id));
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
      dispatch(loadDataById(id));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function deleteData(id) {
  return (dispatch) => {
    return axios.delete(`http://localhost:8080/votes/${id}`).then((response) => {
      dispatch(loadData());
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function comment(id, comment) {
  return (dispatch) => {
    return axios.put(`http://localhost:8080/votes/comment/${id}`, {comment}).then((response) => {
      dispatch(loadData());
      dispatch(loadDataById(id));
    })
    .catch((err) => {
      return err;
    });
  }
}

function setData(data) {
  return {
    type: "SET_DATA",
    data
  }
}

function setSingleData(data) {
  return {
    type: "INDIV_DATA",
    data
  }
}
