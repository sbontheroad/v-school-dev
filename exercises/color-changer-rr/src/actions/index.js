import axios from "axios";

export function loadColor() {
  return (dispatch) => {
    return axios.get("http://www.colr.org/json/color/random").then(function(response) {
      console.log("loadColor data being passed: " + response.data.new_color);
      dispatch(handleData("#" + response.data.new_color, response.data.colors[0].tags[0].name));
    })
    .catch(function(error) {
      console.log(error);
    });
  }
}

function handleData (color, name) {
  console.log("changeColor function is being called");
  return {
    type: "COLOR",
    color,
    name
  }
}
