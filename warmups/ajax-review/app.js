var nameEl = document.createElement("div");
nameEl.setAttribute("class", "name");

document.querySelector("body").appendChild(nameEl);

var para = document.createElement("p");
para.setAttribute("class", "para");

document.querySelector(".name").appendChild(para);


var createName = function (name) {
    var div = document.createElement("div");
    div.innerHTML = name;
    document.querySelector("#characters").appendChild(div);
};

var createFilms = function (films) {
    var film = "";
    for (var i = 0; i < films.length; i++) {
        film += films[i];
    }
    para.innerHTML = film;
}

var getPerson = function (num) {
    axios.get('http://swapi.co/api/people/' + num)
        .then(function (response) {
            createName(response.data.name);
            createFilms(response.data.films)

        })
        .catch(function (error) {
            console.log(error);
        });
}

//getPerson(14);
for(var i = 1; i < 100; i++) {
    getPerson(i);
}

axios.get('http://swapi.co/api/people/5')
    .then(function (response) {
        createFilms(response.data.films)
    })
    .catch(function (error) {
        console.log(error);
    });
