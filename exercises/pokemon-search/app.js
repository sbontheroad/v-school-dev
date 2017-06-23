document.getElementById("search").addEventListener("click", function () {
    var id = document.querySelector("#pokemon-id").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + id);
    xhr.send();

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK)
                var data = JSON.parse(xhr.responseText);
            console.log(data);
                document.getElementById("pokiname").innerHTML = data.name;
            for (var i = 0; i < data.moves.length; i++) {
                var li = document.createElement("li");
                document.getElementById("pokiattack").appendChild(li);
                li.innerHTML = data.moves[i].move.name + ", ";
            }
            for (var i = 0; i < data.abilities.length; i ++) {
               document.getElementById("pokiability").innerHTML = data.abilities[i].ability.name; 
            }
            
            document.getElementById("pokipicture").setAttribute("src", data.sprites.back_default);
                //console.log(data); // 'This is the returned text.'
        } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
        }
    }
});

