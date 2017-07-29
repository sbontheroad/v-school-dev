import axios from "axios";

export function loadData() {
  return (dispatch) => {
    return axios.get("http://localhost:8080").then((response) => {
      dispatch(setData(response.data.data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function addData(data) {
  return (dispatch) => {
    return axios.post("http://localhost:8080", data).then((response) => {
      dispatch(loadData());
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function deleteData(id) {
  return (dispatch) => {
    return axios.delete(`http://localhost:8080/${id}`).then((response) => {
      dispatch(loadData());
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function editData(id, data) {
  return (dispatch) => {
    return axios.put(`http://localhost:8080/${id}`, data).then((response) => {
      dispatch(loadData());
    })
    .catch((err) => {
      throw err;
    });
  }
}


export function setData(data) {
  return {
    type: "SET_DATA",
    data
  }
}
