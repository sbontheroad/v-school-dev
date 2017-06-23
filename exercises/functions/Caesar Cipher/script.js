////inputs: phrase to be encoded & number of spaces to move
//var phrase = "encode me";
//var num = 1;
//
////to simplify: make letters lowercase 
//var lowerCasePhrase = phrase.toLowerCase;
//
////do I need to remove spaces?
//
////output: encoded phrase
//var output = "";
//
////to compare - var with alpha and var with numbers
//
//
////assign number value to letters
//for(var i = 0; i < ; i++) {
//    
//}

//add input number to number value of letter


//return letter at that number value
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var newNum = 0;

var cipher = function (str, num) {
    var output = "";
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        var index = alpha.indexOf(str[i]);
        //console.log(index);
        var newNum = index + num;
        var newNum = newNum % alpha.length;
        if (newNum < 0) {
            newNum += alpha.length;
        }
        if (index === -1) {
            output += str[i];
        } else {
            output += alpha[newNum];
        }
    }
    return output;
};

console.log(cipher("ab z", 100));
console.log(cipher("fg e", -5));

document.querySelector(".btn-custom").addEventListener("click", function () {
    var input = (document.querySelector("#input").value);
    var numSpaces = Number(document.querySelector("#numSpaces").value);
    document.querySelector("#outputSpace").innerHTML = cipher(input, numSpaces);
});



