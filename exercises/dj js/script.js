document.querySelector(".box").addEventListener("mouseover", function () {
    document.querySelector(".box").style.backgroundColor = "blue";
});

document.querySelector(".box").addEventListener("mousedown", function () {
    document.querySelector(".box").style.backgroundColor = "Red";
});

document.querySelector(".box").addEventListener("mouseup", function () {
    document.querySelector(".box").style.backgroundColor = "yellow";
});

document.querySelector(".box").addEventListener("dblclick", function () {
    document.querySelector(".box").style.backgroundColor = "green";
});

window.addEventListener("mousewheel", function () {
    document.querySelector(".box").style.backgroundColor = "orange";
});

document.addEventListener("keydown", function (event) {
    var x = event.keyCode;
    if (x === 82) {
        document.querySelector(".box").style.backgroundColor = "red";
    } else if (x === 66) {
        document.querySelector(".box").style.backgroundColor = "blue";
    } else if (x === 71) {
        document.querySelector(".box").style.backgroundColor = "green";
    } else if (x === 79) {
        document.querySelector(".box").style.backgroundColor = "orange";
    }
});

