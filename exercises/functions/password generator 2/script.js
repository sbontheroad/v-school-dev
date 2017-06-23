var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '$', '!', '(', ')'];

var randomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var randomChar = function () {
    var index = randomNum(0, alpha.length);
    return alpha[index];
}




document.getElementById("submit").addEventListener("click", function () {
    var passLength = Number(document.querySelector("#input").value);
    var str = "";
    for (var i = 1; i <= passLength; i++) {
        str += randomChar();
    }
    document.querySelector("#output").style.fontStyle = "normal";
    document.querySelector("#output").style.fontFamily = "serif";
    document.querySelector("#output").style.fontSize = "16px";
    document.querySelector("#output").style.letterSpacing = "1.3px";
    document.querySelector("#output").innerHTML = str;
});


