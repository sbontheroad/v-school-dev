console.log("loaded");

// let config = {
//   headers: {
//     "X-Mashape-Key": "L6QvSOKww2mshG1Rib49Ytq83xvbp1ipMM0jsnvW0x5EfQZdh0"
//   }
// };
let search = (input) => {
  axios.get(`http://swapi.co/api/people/${input}`).then(function(response) {
    document.getElementById("name").innerHTML = response.data.name
    document.getElementById("gender").innerHTML = response.data.gender
    console.log(response.data);
  });
}

document.getElementById("search").addEventListener("keyup", (e) => {
  if(e.key === "Enter") {
    console.log(e.target.value);
    search(e.target.value)
  }
  // console.log(e);
});
