var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name? ");
var hasEaten = false;

function printroom() {
    if (hasEaten === true) {
        console.log("you can now go to bed");
    } else {
        console.log("you woke up hungry and wandered to the kitchen. The kitchen has a fridge and cupboard. You cannot go back to bed until you have eaten.")
    }
}

var fridgeOpen = false;
var pizzaEaten = false;
var CupboardOpen = false;
var cookiesEaten = false;

console.log("commands are look, open, and eat");
while(true) {
    var input = readlineSync.question(userName + ", what would you like to do? ");
    input = input.toLowerCase();
    if(input.includes("look")){
        printroom();
    } else if (input.includes("eat") && (input.includes("pizza")) && fridgeOpen === false) {
        console.log("you might want to open the fridge...");
    } else if (input.includes("eat") && fridgeOpen === false && CupboardOpen === false) {
        console.log("I know you're hungry, but food doesn't fall from the sky. Forage already.");  
    }else if (input.includes("open") && (input.includes("fridge"))) {
        console.log("you opened the fridge and found some leftover pizza");
        fridgeOpen = true;
    } else if (input.includes("eat") && (input.includes("pizza")) && fridgeOpen === true) {
        console.log("that was good.  Are you still hungry? ")
        pizzaEaten = true;
    } else if (input.includes("yes")) {
        console.log("find more food!");
    } else if (input.includes("no") && pizzaEaten === true && cookiesEaten === true) {
        console.log(("Then go back to bed."));
        break
    }  else if (input.includes("open") && input.includes("cupboard")) {
        console.log("There are cookies in the cupboard!");
    } else if (input.includes("eat") && input.includes("cookies")) {
        console.log("Nomnomnom, that was good. Are you still hungry? ");
        cookiesEaten = true;
    } else if (input.includes("no") && pizzaEaten === false && cookiesEaten === true) {
        console.log("Then why did you get up?  Find more food!!");
    }
     else if (input.includes("no") && pizzaEaten === true && cookiesEaten === false) {
        console.log("Then why did you get up?  Find more food!!");
    } else if (input.includes("open")) {
        console.log("open what? ");
    } 
}


