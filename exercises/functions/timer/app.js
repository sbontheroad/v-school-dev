//var myInterval = setInterval(function () {
//    myTimer()
//}, 10);
//
//function myTimer() {
//    var d = new Date();
//    var t = d.toLocaleTimeString();
//    document.getElementById("clock").innerHTML = t;
//}
var counter = 3;
var timer = setInterval(function () {
    document.getElementById("cd").innerHTML = "counting: " + counter;
    counter--;
    if (counter < 0) {
        clearInterval(timer);
        document.getElementById("clock").innerHTML = '<img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjczwimvVDMhtwbgiFU5zQ_0vxRJ5qtAA5YYiXSB0Qhjec0yIg">';
        document.getElementById("meow").innerHTML = "ROOOOAR!!!";
        document.getElementById("cd").style.backgroundColor = "white";
        document.getElementById("cd").style.color = "white";
    };
}, 1000);
