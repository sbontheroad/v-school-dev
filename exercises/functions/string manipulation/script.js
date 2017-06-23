var str1 = prompt("please enter your first name");
var str2 = prompt("please enter your last name");

var index = parseInt(prompt("please input a number"));
var userinput = prompt("please input a string");

var lengthOf = str1.length;

var lastHalf = function(userinput) {
    if(userinput.length >= 20) {
        return userinput.substr(input.length / 2);
    } else {
        return userinput;
    };
};

console.log(userinput.substr(index));
console.log(str1.toUpperCase());
console.log(lengthOf);
console.log(str1 + " " + str2);
console.log(lastHalf(userinput));
