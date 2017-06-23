var caps = function (str) {
    var output = "";
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            output += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            output += str[i].toUpperCase();
        }
    }
    return output;
}

console.log(caps("TesT"));
