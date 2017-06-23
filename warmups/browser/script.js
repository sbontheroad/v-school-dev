document.getElementById("output").style.color = "green";
document.getElementById("output").style.fontSize = "40px";
document.getElementById("output").style.fontFamily = "Century";
document.body.style.backgroundColor = "yellow";
document.getElementById("output").toUpperCase;
document.getElementById("output").innerHTML = "change";
document.getElementById("flapJacks").innerHTML = "different text";
document.getElementById("changeFont").style.fontFamily = "Garamond";
document.getElementById("flapJacks").style.fontSize = "20px";
document.getElementById("output").addEventListener("click", function () {
    document.getElementById("output").innerHTML = "you clicked here";
});;
document.getElementById("flapJacks").addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "red";
});
document.getElementById("flapJacks").addEventListener("mouseout", function () {
    document.body.style.backgroundColor = "yellow";
});
document.getElementById("mutton").addEventListener("click", function () {
    document.getElementById("output").innerHTML = document.getElementById("allen").value;
});

document.getElementById("checkbox").addEventListener("click", function() {
   document.getElementById("output").innerHTML = "clicked checkbox"; 
});
