import axios from "axios";

export function login (username, password) {
  return (dispatch) => {
    return axios.post("http://localhost:8080/auth/login", {username, password}).then((response) => {
      dispatch(setToken(response.data.token));
      dispatch(setPriv(response.data.priv));
    })
    .catch((err) => {
      alert("username or password are not correct...")
      throw err;
    });
  }
}

export function signup (username, password) {
  return (dispatch) => {
    return axios.post("http://localhost:8080/auth/signup", {username, password}).then((response) => {
      alert("account created");
    })
    .catch((err) => {
      alert("username taken, please try again...")
      throw err;
    });
  }
}


export function loadEvents() {
  return (dispatch) => {
    return axios.get("http://localhost:8080/test/events").then((response) => {
      dispatch(setEvents(response.data.data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function loadGuests(token) {
  return (dispatch) => {
    return axios.get("http://localhost:8080/test/guests", {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      dispatch(setGuests(response.data.data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function loadUserQue(token) {
  return (dispatch) => {
    return axios.get("http://localhost:8080/auth/userque", {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      dispatch(setUserQue(response.data.data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function addUser(username, priv, token) {
  return (dispatch) => {
    return axios.post("http://localhost:8080/auth/userque", {username, priv}, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      dispatch(loadUserQue(token));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function removeUser(username, priv, token) {
  return (dispatch) => {
    return axios.post("http://localhost:8080/auth/userque", {username, priv}, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      dispatch(loadUserQue(token));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function setUserQue(data) {
  return {
    type: "SET_USER_QUE",
    data
  }
}


export function setEvents(data) {
  return {
    type: "SET_EVENTS",
    data
  }
}

export function setGuests(data) {
  return {
    type: "SET_GUESTS",
    data
  }
}

export function setToken(token) {
  return {
    type: "SET_TOKEN",
    token
  }
}

export function setPriv(priv) {
  return {
    type: "SET_PRIV",
    priv
  }
}
