var readlineSync = require("readline-sync");

var name = readlineSync.question("what is your name? ");
var age = readlineSync.question("how old are you? ");
var color = readlineSync.question("what is your fav color? ");

console.log(name.toUpperCase() + " is " + age + " and loves the color " + color);

console.log("your name has " + name.length + " characters");

console.log(name.concat(color));

var message = readlineSync.question("please enter a message: ");

console.log(message.slice(20));

var pick = readlineSync.question("pick a number 1-10: ");

console.log(message.slice(pick));
