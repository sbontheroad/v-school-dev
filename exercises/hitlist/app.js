var createHitBox = function (name, image) {
    var colmd4 = document.createElement("div");
    colmd4.setAttribute("class", "col-md-4");

    var hitBox = document.createElement("div");
    hitBox.setAttribute("class", "hit-box");
    hitBox.style.background = "url('" + image + "')";
    hitBox.style.backgroundSize = "cover";
    hitBox.style.backgroundPosition = "center";

    var nameEl = document.createElement("div");
    nameEl.setAttribute("class", "name");
    nameEl.innerHTML = name;

    document.querySelector(".hitlist").appendChild(colmd4);
    colmd4.appendChild(hitBox);
    hitBox.appendChild(nameEl);
}



axios.get("http://api.vschool.io:6543/hitlist.json").then(function (response) {
    for (var i = 0; i < 6; i++) {
    createHitBox(response.data[i].name, response.data[i].image);
}
}).catch(function (err) {
    console.log(err);
});




