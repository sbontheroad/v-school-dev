let readlineSync = require('readline-sync');

let cal = require("./cal.js");
let add = cal.add;
let subtract = cal.subtract;
let multiply = cal.multiply;
let divide = cal.divide;
let modulus = cal.modulus;

let userName = readlineSync.question('What is your name? ');
console.log(`Hi ${userName}! Let's calculate!  `);
let operation = readlineSync.question('What would you like to do: add, subtract, multiply, divide, or modulus? ');
console.log(`You chose ${operation}. `)
let num1 = readlineSync.question('Please input the first number: ');
num1 = Number(num1);
console.log(`Thank you, ${userName}!`);
let num2 = readlineSync.question('Please input the second number: ');
num2 = Number(num2);
console.log(`Okay, I will ${operation} ${num1} and ${num2}`);
console.log("The answer is " + cal[operation](num1, num2));

// let pickOperator = (num1, num2) => {
//
// }
//import add from ./cal.js
// let add = require ("./cal.js").add;
//there are many ways to import info, this is just one standard


// console.log("[+] welcome to my calculator");
// console.log("add: " + add(5, 7));
// console.log("sub: " + sub(3, 90));
// console.log("mult: " + mult(3, 2));
// console.log("divide: " + divide(12, 3));
// console.log("modulus: " + modulus(12, 4));
