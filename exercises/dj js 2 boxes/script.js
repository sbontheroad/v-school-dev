var boxes = document.getElementsByClassName("box");

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "blue";
    });
    boxes[i].addEventListener("mousedown", function () {
        this.style.backgroundColor = "red";
    });
    boxes[i].addEventListener("mouseup", function () {
        this.style.backgroundColor = "yellow";
    });
    boxes[i].addEventListener("dblclick", function () {
        this.style.backgroundColor = "green";
    });
}

window.addEventListener("mousewheel", function () {
    var boxes = document.getElementsByClassName("box");
        for(var i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "orange";
        }   
});

document.addEventListener("keydown", function (event) {
    var x = event.keyCode;
    var boxes = document.getElementsByClassName("box");
    var color = "";
    if (x === 82) {
        color = "red";
    } else if (x === 66) {
        color = "blue";
    } else if (x === 71) {
        color = "green";
    } else if (x === 79) {
        color = "orange";
    } 
    for(var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = color;
    }
});
