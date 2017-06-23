var readlineSync = require("readline-sync");
console.log("Welcome to park city, where skiers go to die!");
var name = readlineSync.question("what is your name?");

var Player = function(name, hp, inv) {
    this.name = name;
    this.hp = hp || 100;
    this.inv = inv || [];
    this.print = function {
        console.log("Name: " + this.name + " , HP: " + this.hp)
    }
}

console.log("[+] Enter 'w' to walk")
while (true) {
    var input = readlineSync.question(">> ");
    if (input === w) {
        var chance = genNumInRange(0, 100);
        if (chance >= 50) {
            //put fight in here
        } else {
            console.log("you live another day");
        }

    }

}



//var readlineSync = require('readline-sync');
//var userName = readlineSync.question("Hi! What's your name? ");
//var hasEaten = false;
//
//function printroom() {
//    if (hasEaten === true) {
//        console.log("you can now go to bed");
//    } else {
//        console.log("Hi " + userName + "! You had a nightmare about homework and woke up hungry.  You need to find food and an extra blanket before going back to bed. The house is haunted, so becareful of things that go boo in the night! Type 'help' for game commands.")
//    }
//}
//
//var fridgeOpen = false;
//var pizzaEaten = false;
//var CupboardOpen = false;
//var cookiesEaten = false;
//
//console.log("commands are look, open, and eat");
//
//
//
//while (true) {
//
//    console.log("Hi " + userName + "! You had a nightmare about homework and woke up hungry.  You need to find food and an extra blanket before going back to bed. The house is haunted, so becareful of things that go boo in the night! Type 'help' for game commands.");
//
//    var input = readlineSync.question(userName + ", what would you like to do? ");
//    input = input.toLowerCase();
//    if (input.includes("look")) {
//        printroom();
//    } else if (input.includes("eat") && (input.includes("pizza")) && fridgeOpen === false) {
//        console.log("you might want to open the fridge...");
//    } else if (input.includes("eat") && fridgeOpen === false && CupboardOpen === false) {
//        console.log("I know you're hungry, but food doesn't fall from the sky. Forage already.");
//    } else if (input.includes("open") && (input.includes("fridge"))) {
//        console.log("you opened the fridge and found some leftover pizza");
//        fridgeOpen = true;
//    } else if (input.includes("eat") && (input.includes("pizza")) && fridgeOpen === true) {
//        console.log("that was good.  Are you still hungry? ")
//        pizzaEaten = true;
//    } else if (input.includes("yes")) {
//        console.log("find more food!");
//    } else if (input.includes("no") && pizzaEaten === true && cookiesEaten === true) {
//        console.log(("Then go back to bed."));
//        break
//    } else if (input.includes("open") && input.includes("cupboard")) {
//        console.log("There are cookies in the cupboard!");
//    } else if (input.includes("eat") && input.includes("cookies")) {
//        console.log("Nomnomnom, that was good. Are you still hungry? ");
//        cookiesEaten = true;
//    } else if (input.includes("no") && pizzaEaten === false && cookiesEaten === true) {
//        console.log("Then why did you get up?  Find more food!!");
//    } else if (input.includes("no") && pizzaEaten === true && cookiesEaten === false) {
//        console.log("Then why did you get up?  Find more food!!");
//    } else if (input.includes("open")) {
//        console.log("open what? ");
//    } else if (input.includes("exit")) {
//        break;
//    }
//}


/////////////////
////////////////
////////////////

//var readlineSync = require('readline-sync');
//
//var lives = 3;
//
//while (lives > 0) {
//
//    var name = readlineSync.question("Hi! What's your name?");
//    console.log("Hi " + name + "! You are a student at V School, you lucky devil. You've been working hard and want to take some time for yourself this weekend; however, your instructor, Jacob, loves giving assignments. It's Friday and you must code a program and find your way out of the building without Jacob giving you more assignments. You can try to distract Jacob or run if he appears.  If he gives you 3 assignments, you will not be able to go out.  Type in 'help' to see the commands.  Good luck!")
//    
//}


//USEFUL NOTES:
//var readlineSync = require("readline-sync");
//
//var name = readlineSync.question("what is your name? ");
//var age = readlineSync.question("how old are you? ");
//var color = readlineSync.question("what is your fav color? ");
//
//console.log(name.toUpperCase() + " is " + age + " and loves the color " + color);
//
//console.log("your name has " + name.length + " characters");
//
//console.log(name.concat(color));
//
//var message = readlineSync.question("please enter a message: ");
//
//console.log(message.slice(20));
//
//var pick = readlineSync.question("pick a number 1-10: ");
//
//console.log(message.slice(pick));
//
////That prints out + "The type is " + type + ", Hit points: " + hitPoints + " defense: " + Defense;
//
//var Enemy = function (type, hitPoints, defense) {
//    this.type = type;
//    this.hitPoints = hitPoints;
//    this.defense = defense;
////    this.print = function () {
////        console.log("The type is " + type + ", Hit points: " + hitPoints + " defense: " + defense)
////    };
//};
//
//var genNumInRange = function (min, max) {
//    return Math.floor(Math.random() * (max - min) + min);
//};
//
//function genEnemy() {
//    var enemyTypes = ["Twighlight Sparkle", "Rainbow Dash", "Pinkie Pie"];
//    var randomType = enemyTypes[genNumInRange(0, enemyTypes.length)];
//    var randomHitPoints = 0;
//    if (randomType === "Twighlight Sparkle") {
//        randomHitPoints = genNumInRange(80, 100);
//    } else if (randomType === "Rainbow Dash") {
//        randomHitPoints = genNumInRange(50, 79);
//    } else {
//        randomHitPoints = genNumInRange(20, 49);
//    }
//    var randomEnemy = new Enemy(randomType, randomHitPoints, randomHitPoints * 3);
//    return randomEnemy;
//}
//
//
//for (var i = 0; i < 100; i++) {
//    var myEnemy = genEnemy();
//    //myEnemy.print();
//    //append to array
//    var arrOfEnemies = [];
//    arrOfEnemies.push(myEnemy);
//    console.log(arrOfEnemies);
//}
//
